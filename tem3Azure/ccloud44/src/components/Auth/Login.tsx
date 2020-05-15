import React from "react";
import * as firebase from "firebase";
import withFirebaseAuth, {
  WrappedComponentProps,
} from "react-with-firebase-auth";
import firebaseApp from "../../Utils/configFirebase";
import "./Auth.style.scss";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
export interface IAppProps {
  user: WrappedComponentProps;
  signInWithGoogle: WrappedComponentProps;
  signInWithFacebook: WrappedComponentProps;
  signInWithTwitter: WrappedComponentProps;
  signInWithGithub: WrappedComponentProps;
  createUserWithEmailAndPassword: WrappedComponentProps;
  error: WrappedComponentProps;
  history: any;
}

export interface IAppState {
  email: string;
  pass: string;
  isError: boolean;
  errorMessage: [];
  isLoading: boolean;
}

class Login extends React.Component<
  IAppProps & WrappedComponentProps,
  IAppState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "gligadumitru98@gmail.com",
      pass: "123456",
      isError: false,
      errorMessage: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    localStorage.getItem("token_user") && this.props.history.push("/account");
  }

  handleSubmit = async (event: any) => {
    this.setState({
      isLoading: true,
    });
    let tempIsError = false;
    let errorMessage1: any[] = [];
    event.preventDefault();

    const obj = {
      email: this.state.email,
      password: this.state.pass,
    };
    //axios.post
    const data22 = await axios
      .post(
        "https://backend-version-2.azurewebsites.net/api/v1/users/login",
        obj
      )
      .then((res) => {
        return {
          status: "success",
          data: res,
        };
      })
      .catch((err) => {
        return {
          status: "failed",
          data: Object.values(err.response.data)[0],
        };
      });
    if (data22.status === "failed") {
      tempIsError = true;
      errorMessage1.push(data22.data);
    } else {
      if (data22.status === "success") {
        const obj1: any = data22.data;
        const obj2: any = obj1.data;
        const token = obj2.token;
        localStorage.setItem("token_user", token);
        this.props.history.push("/account");
      }
    }

    if (tempIsError) {
      this.setState(({
        isError: tempIsError,
        errorMessage: errorMessage1,
      } as unknown) as Pick<IAppState, keyof IAppState>);
    }
  };
  handleInputChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(({
      [name]: value,
    } as unknown) as Pick<IAppState, keyof IAppState>);
  };
  public render() {
    const { user, signInWithFacebook, signInWithGoogle } = this.props;

    return (
      <>
        {!user ? (
          <>
            <section className="sign-in">
              <div className="container">
                <div className="signin-content">
                  <div className="signin-image">
                    <figure>
                      <img src="/img/signin-image.jpg" alt="sing up " />
                    </figure>
                    <Link to="/register" className="signup-image-link">
                      Create an account
                    </Link>
                  </div>

                  <div className="signin-form">
                    <h2 className="form-title">Sign up</h2>
                    {this.state.errorMessage.map((msg) => {
                      return (
                        <div className="alert alert-danger" role="alert">
                          {msg}
                        </div>
                      );
                    })}
                    <form
                      onSubmit={this.handleSubmit}
                      className="register-form"
                      id="login-form"
                    >
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="zmdi zmdi-account material-icons-email"></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pass">
                          <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="password"
                          name="pass"
                          minLength={6}
                          onChange={this.handleInputChange}
                          id="pass"
                          placeholder="Password"
                          value={this.state.pass}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          name="remember-me"
                          id="remember-me"
                          className="agree-term"
                        />
                        <label
                          htmlFor="remember-me"
                          className="label-agree-term"
                        >
                          <span>
                            <span></span>
                          </span>
                          Remember me
                        </label>
                      </div>
                      <div className="form-group form-button">
                        <input
                          type="submit"
                          name="signin"
                          id="signin"
                          className="form-submit"
                          value="Log in"
                          disabled={this.state.isLoading}
                        />
                        {this.state.isLoading && (
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </form>
                    <div className="social-login">
                      <span className="social-label">Or login with</span>
                      <ul className="socials">
                        <li>
                          <a href="#1" onClick={signInWithFacebook}>
                            <i className="display-flex-center zmdi zmdi-facebook"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#1" onClick={signInWithGoogle}>
                            <i className="display-flex-center zmdi zmdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Redirect to="/account" />
        )}
      </>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider(),
};

export default withRouter(
  connect()(
    withFirebaseAuth({
      providers,
      firebaseAppAuth,
    })(Login)
  )
);

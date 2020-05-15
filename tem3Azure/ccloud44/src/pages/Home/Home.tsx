import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Parallax } from 'react-parallax';
import Carousel from './Carousel';
import classNames from 'classnames';
import Scrollspy from 'react-scrollspy';
import * as Scroll from 'react-scroll';
import DztImageGalleryComponent from 'reactjs-image-gallery';
import NavItem from './NavItem';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

export interface IAppState {
  scrolling: Boolean;
  collapseMenu: Boolean;
  tooltipOpen: boolean | undefined;
}

export default class Home extends React.Component<{}, IAppState> {
  constructor(props: IAppState) {
    super(props);
    this.state = {
      scrolling: false,
      collapseMenu: false,
      tooltipOpen: false
    };
  }
  image1 = 'img/infinite-loop-01.jpg';
  image2 = 'img/infinite-loop-02.jpg';
  image3 = 'img/infinite-loop-03.jpg';

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event: any) => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  };

  handleCollapse = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({
      collapseMenu: !this.state.collapseMenu
    });
  };
  handleTooltip = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  public render() {
    var data = [
      {
        url:
          'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Kayak',
        thumbUrl:
          'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Cyclist competition',
        thumbUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Surfer in action',
        thumbUrl:
          'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80',
        title: 'Drops',
        thumbUrl:
          'https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80'
      },

      {
        url:
          'https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Bird',
        thumbUrl:
          'https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
        title: 'Blue river',
        thumbUrl:
          'https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
        title: 'Mountains',
        thumbUrl:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
        title: 'Mountains',
        thumbUrl:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
        title: 'Mountains',
        thumbUrl:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      },
      {
        url:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
        title: 'Mountains',
        thumbUrl:
          'https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'
      }
    ];

    return (
      <div className='homepage'>
        <Parallax
          blur={1}
          bgImage={this.image1}
          bgImageAlt='the cat'
          strength={500}
        >
          <section id='infinite' className='text-white av-font-big av-parallax'>
            <nav
              className={classNames('navbar navbar-expand-md av-navbar', {
                scroll: this.state.scrolling
              })}
              id='tmNav'
            >
              <div className='container'>
                <div className='av-next'>
                  <Scroll.Link
                    activeclassName='active'
                    to='infinite'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='navbar-brand'
                    href='#infinite'
                  >
                    <i className='fas fa-infinity'></i> Infinite Loop
                  </Scroll.Link>
                </div>

                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={this.handleCollapse}
                >
                  <i className='fas fa-bars navbar-toggler-icon'></i>
                </button>
                <div
                  className={classNames('collapse navbar-collapse', {
                    show: this.state.collapseMenu
                  })}
                  id='navbarSupportedContent'
                >
                  <Scrollspy
                    className='navbar-nav ml-auto'
                    items={[
                      'infinite',
                      'whatwedo',
                      'testimonials',
                      'gallery',
                      'contact'
                    ]}
                    currentClassName='current'
                  >
                    <li className='nav-item'>
                      <NavItem
                        scrolling={true}
                        link='infinite'
                        id=''
                        titleForTooltip=''
                        icon='fas fa-home'
                        text='Home'
                      />
                    </li>
                    <li className='nav-item'>
                      <NavItem
                        scrolling={true}
                        link='whatwedo'
                        id=''
                        titleForTooltip=''
                        icon='far fa-question-circle'
                        text='What We Do'
                      />
                    </li>
                    <li className='nav-item'>
                      <NavItem
                        scrolling={true}
                        link='testimonials'
                        id=''
                        titleForTooltip=''
                        icon='far fa-question-circle'
                        text='Testimonials'
                      />
                    </li>
                    <li className='nav-item'>
                      <NavItem
                        scrolling={true}
                        link='gallery'
                        id=''
                        titleForTooltip=''
                        icon='far fa-images'
                        text='Gallery'
                      />
                    </li>
                    <li className='nav-item'>
                      <NavItem
                        scrolling={true}
                        link='contact'
                        id=''
                        titleForTooltip=''
                        icon='far fa-address-card'
                        text='Contact'
                      />
                    </li>
                    <li className='nav-item'>
                      <NavItem
                        scrolling={false}
                        link='/login'
                        id='accountIcon'
                        titleForTooltip='Account'
                        icon='far fa-user'
                        text=''
                      />
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </nav>

            <div className='text-center av-hero-text-container'>
              <div className='av-hero-text-container-inner'>
                <h2 className='av-hero-title'>Infinite Loop</h2>
                <p className='av-hero-subtitle'>
                  Cloud Computing Application
                  <br />
                  Google Cloud App Engine
                </p>
              </div>
            </div>

            <div className='av-next av-intro-next'>
              <Scroll.Link
                activeclassName='active'
                to='whatwedo'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='text-center av-down-arrow-link'
                href='#whatwedo'
              >
                <i className='fas fa-arrow-down av-down-arrow'></i>
              </Scroll.Link>
            </div>
          </section>
        </Parallax>
        <section id='whatwedo' className='av-section-pad-top'>
          <div className='container'>
            <div className='row av-content-box'>
              <div className='col-lg-12 col-xl-12'>
                <div className='av-intro-text-container'>
                  <h2 className='av-text-primary mb-4 av-section-title'>
                    What We Do
                  </h2>
                  <p className='mb-4 av-intro-text'>
                    This is Infinite Loop, free Bootstrap 4.0 HTML template with
                    a parallax effect. This layout is what you can modify and
                    use for your websites. Please spread a word to your friends
                    about our website. Thank you for supporting us. If you have
                    any question, you can contact us or chat with us on our
                    <a href='https://fb.com/tooplate'>Tooplate Facebook page</a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className='row av-content-box'>
              <div className='col-lg-1'>
                <i className='far fa-3x fa-chart-bar text-center av-icon'></i>
              </div>
              <div className='col-lg-5'>
                <div className='av-intro-text-container'>
                  <h2 className='av-text-primary mb-4'>Market Analysis</h2>
                  <p className='mb-4 av-intro-text'>
                    Praesent sed pharetra lorem, blandit convallis mi. Aenean
                    ornare elit ac metus lacinia, sed iaculis nibh semper.
                    Pellentesque est urna.
                  </p>
                </div>
              </div>

              <div className='col-lg-1'>
                <i className='far fa-3x fa-comment-alt text-center av-icon'></i>
              </div>
              <div className='col-lg-5'>
                <div className='av-intro-text-container'>
                  <h2 className='av-text-primary mb-4'>Fast Support</h2>
                  <p className='mb-4 av-intro-text'>
                    Credit goes to
                    <a rel='nofollow' href='https://www.pexels.com'>
                      Pexels
                    </a>
                    website for all images used in this template. Cras
                    condimentum mi et sapien dignissim luctus.
                  </p>
                </div>
              </div>
            </div>

            <div className='row av-content-box'>
              <div className='col-lg-1'>
                <i className='fas fa-3x fa-fingerprint text-center av-icon'></i>
              </div>
              <div className='col-lg-5'>
                <div className='av-intro-text-container'>
                  <h2 className='av-text-primary mb-4'>Top Security</h2>
                  <p className='mb-4 av-intro-text'>
                    You have <strong>no</strong> authority to post this template
                    as a ZIP file on your template collection websites. You can
                    <strong>use</strong> this template for your commercial
                    websites.
                  </p>

                  <div className='av-continue'>
                    <a
                      href='#testimonials'
                      className='av-intro-text av-btn-primary'
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-1'>
                <i className='fas fa-3x fa-users text-center av-icon'></i>
              </div>
              <div className='col-lg-5'>
                <div className='av-intro-text-container'>
                  <h2 className='av-text-primary mb-4'>Social Work</h2>
                  <p className='mb-4 av-intro-text'>
                    You can change
                    <a href='https://fontawesome.com/icons?d=gallery'>
                      Font Awesome icons
                    </a>
                    by either
                    <b>
                      <em>fas or far</em>
                    </b>
                    in the HTML codes. For Examples:
                    <br />
                  </p>

                  <div className='av-continue'>
                    <a
                      href='#testimonials'
                      className='av-intro-text av-btn-primary'
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Parallax
          blur={1}
          bgImage={this.image2}
          bgImageAlt='the cat'
          strength={500}
        >
          <section
            id='testimonials'
            className='av-section-pad-top av-parallax-2'
          >
            <div className='container av-testimonials-content'>
              <div className='row'>
                <div className='col-lg-12 av-content-box'>
                  <h2 className='text-white text-center mb-4 av-section-title'>
                    Testimonials
                  </h2>
                  <p className='mx-auto av-section-desc text-center'>
                    Nulla dictum sem non eros euismod, eu placerat tortor
                    lobortis. Suspendisse id velit eu libero pellentesque
                    interdum. Etiam quis congue eros.
                  </p>

                  <div className='mx-auto av-gallery-container av-gallery-container-2'>
                    <div className='av-testimonials-carousel'>
                      <Carousel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='av-bg-overlay'></div>
          </section>
        </Parallax>
        <section id='gallery' className='av-section-pad-top'>
          <div className='container av-container-gallery'>
            <div className='row'>
              <div className='text-center col-12'>
                <h2 className='av-text-primary av-section-title mb-4'>
                  Gallery
                </h2>
                <p className='mx-auto av-section-desc'>
                  Praesent sed pharetra lorem, blandit convallis mi. Aenean
                  ornare elit ac metus lacinia, sed iaculis nibh semper.
                  Pellentesque est urna, lobortis eu arcu a, aliquet tristique
                  urna.
                </p>
              </div>
            </div>

            <DztImageGalleryComponent
              imageBackgroundColor='transparent'
              imgClassName='dataaa'
              images={data}
            />
          </div>
        </section>
        <Parallax
          blur={1}
          bgImage={this.image3}
          bgImageAlt='the cat'
          strength={500}
        >
          <section id='contact' className='av-section-pad-top av-parallax-2'>
            <div className='container av-container-contact'>
              <div className='row'>
                <div className='text-center col-12'>
                  <h2 className='av-section-title mb-4'>Contact Us</h2>
                  <p className='mb-5'>
                    Proin enim orci, tincidunt quis suscipit in, placerat nec
                    est. Vestibulum posuere faucibus posuere. Quisque aliquam
                    velit eget leo blandit egestas. Nulla id posuere felis, quis
                    tristique nulla.
                  </p>
                  <br />
                </div>

                <div className='col-sm-12 col-md-6'>
                  <ContactForm />
                </div>

                <div className='col-sm-12 col-md-6'>
                  <div className='contact-item'>
                    <a
                      rel='nofollow'
                      href='https://www.tooplate.com/contact'
                      className='item-link'
                    >
                      <i className='far fa-2x fa-comment mr-4'></i>
                      <span className='mb-0'>Chat Online</span>
                    </a>
                  </div>

                  <div className='contact-item'>
                    <a
                      rel='nofollow'
                      href='mailto:mail@company.com'
                      className='item-link'
                    >
                      <i className='far fa-2x fa-envelope mr-4'></i>
                      <span className='mb-0'>mail@company.com</span>
                    </a>
                  </div>

                  <div className='contact-item'>
                    <Link rel='nofollow' to='/map' className='item-link'>
                      <i className='fas fa-2x fa-map-marker-alt mr-4'></i>
                      <span className='mb-0'>Our Location</span>
                    </Link>
                  </div>

                  <div className='contact-item'>
                    <a
                      rel='nofollow'
                      href='tel:0100200340'
                      className='item-link'
                    >
                      <i className='fas fa-2x fa-phone-square mr-4'></i>
                      <span className='mb-0'>255-662-5566</span>
                    </a>
                  </div>

                  <div className='contact-item'>&nbsp;</div>
                </div>
              </div>
            </div>

            <footer className='text-center small av-footer'>
              <p className='mb-0'>
                Copyright &copy; 2020 UAIC - Cloud Computin Course - Designed by
                Gliga Dumitru | Vatamanelu Andreea
              </p>
            </footer>
          </section>
        </Parallax>
      </div>
    );
  }
}

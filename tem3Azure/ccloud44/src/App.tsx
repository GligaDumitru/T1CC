/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { messaging } from "./init-fcm";
import firebase from "firebase";

const renderNotification = (
  notification: React.ReactNode,
  i: string | number | undefined
) => <li key={i}>{notification}</li>;

interface Props {
  token: any;
}

export interface IAppProps {}

export interface IAppState {
  notifications: any;
  token: any;
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return <Main />;
  }
}

export default App;

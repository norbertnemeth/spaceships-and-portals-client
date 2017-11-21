import React from "react";
import ReactDOM from "react-dom";
import reducer from "./state/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router";
import initialState from "./initial.state";
import io from 'socket.io-client';
import Main from "../src/components/main/main.container";

const ENABLE_DEV_TOOLS = true;

const store = createStore(
  reducer,
  initialState,
  ENABLE_DEV_TOOLS ? composeWithDevTools(applyMiddleware()) : applyMiddleware()
);

const socket = io('http://localhost:4001');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/start-game" render={props => <Main socket={socket} {...props} />} />
        <Redirect to="/start-game" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

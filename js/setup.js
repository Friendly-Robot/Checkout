/**
 * @flow
 */

"use strict";

import React from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import App from "./App";
import Splash from "./common/Splash";

function setup(): ReactClass<{}> {
  class Root extends React.Component {
    state = { store: null };

    componentDidMount() {
      const store = configureStore();
      setTimeout(() => this.setState({ store }), 1200);
    }

    render() {
      if (!this.state.store) {
        return <Splash />;
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;

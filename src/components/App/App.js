import React, { Component } from "react";
import './App.css';
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import { Provider } from "react-redux";
import Header from '../../layouts/Header';
import Body from '../../layouts/Body';
import store from "../../redux/store"

injectGlobal`
  ${normalize()}
`;

class App extends Component {
  render() {
    return (
    <Provider store= {store}>
      <div>
          <Header />
          <Body />
      </div>
    </Provider>
    );
  }
}

export default App;

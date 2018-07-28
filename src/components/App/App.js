import React, { Component } from 'react';
import './App.css';
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import Header from '../../layouts/Header'
import Body from '../../layouts/Body'

injectGlobal`
  ${normalize()}
`;

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Body />
    </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Booklist from "./Booklist";

class App1 extends Component {
  render() {
    return <h2>Hello Class App2</h2>;
  }
}

const App = () => {
  return (
    <>
      <Booklist />
    </>
  );
};

export default App;

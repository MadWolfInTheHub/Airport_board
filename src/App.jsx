import React, { Component } from "react";
import { Provider } from 'react-redux';
import Board from "./airport_boards/components/Board";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  };
};
export default App;
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Board from "./components/Board";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Board />
            </Route>
            <Route path={`/${store.date}`}>
              <Board />
            </Route>
{/*             <Route path="/*">
              <PageNotFound />
            </Route> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  };
};
export default App;
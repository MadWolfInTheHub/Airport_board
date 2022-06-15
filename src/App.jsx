import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'
import Board from "./components/Board";
import History from "./components/History";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={History}>
        <Switch>
          <Route path="/" component={Board}/>
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
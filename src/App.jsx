import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Board from "./components/Board";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Board}/>
          <Route path="/:data" component={Board}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
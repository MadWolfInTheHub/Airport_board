import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Board from "./components/Board";
import PageNotFound from "./components/PageNotFound";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Board}/>
          <Route path="/:date" component={Board}/>
          <Route path="/*">
            <PageNotFound />
          </Route> 
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
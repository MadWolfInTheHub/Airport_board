import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from "./components/Board";
import SearchFlight from "./components/SearchFlight";
import store from "./store";
const HI = () => {
  return (<div>HELLO</div>)
}
const Bye = () => {
  return (<div>Bye</div>)
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />}>
            <Route path="departures" element={<SearchFlight/>} />
            <Route path="arrivals" element={<SearchFlight/>} />
            <Route path="" element={<SearchFlight/>}/>
          </Route>
          <Route path="/hi" element={<HI />}>
            <Route path="say" element={<HI/>} />
            <Route path="no" element={<Bye/>} />
            <Route path="" element={<SearchFlight/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
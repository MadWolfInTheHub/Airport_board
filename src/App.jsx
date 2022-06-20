import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from "./components/Board";
import SearchFlight from "./components/SearchFlight";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board/>}>
            <Route path="" element={<SearchFlight/>}/>
            <Route path="departures" element={<SearchFlight/>} />
            <Route path="arrivals" element={<SearchFlight/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
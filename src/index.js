import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import List from './components/list/list';
import Card from "./components/card";
import axios from "axios";
import "./index.css";
import Home from "./components/home/home";

axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/list"} element={<List />} />
        <Route path={"/film/:id"} element={<Card />} />
        <Route path={"/login"} element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
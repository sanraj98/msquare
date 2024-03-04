import React from 'react';
import './App.css';
import {Navigator} from './HomePage/Navigator';
import {Videocontainer} from './HomePage/Videocontainer';
import { Homepage } from './HomePage/Homepage';
import { Footer } from './HomePage/Footer';
import {Redirect, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigator />
      <switch>
      <Route path={"/"}>
        <Redirect to={"/home"}/>
      </Route>
      </switch>
      <Route path={"/home"}>
      <Homepage />
      </Route>
      <Footer/>
    </div>
  );
}

export default App;

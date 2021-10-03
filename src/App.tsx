import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Calculator} from "./components/Calculator";

function App() {
  return (
    <div className={'container'}>
      <Header />
      <Calculator />
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import CountContainer from './components/containers/CountContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <CountContainer initial={1} stock={5} />
      <CountContainer initial={2} stock={9} />
      
    </>
  );
}

export default App;

import React from 'react';
import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
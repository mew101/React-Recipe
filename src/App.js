import React from 'react';
// eslint-disable-next-line
import Logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'e03c014b'
  const APP_KEY = '81c37b55a389866039cfd9824b61039c	'
// eslint-disable-next-line
  const SampleReq =
   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type = "text" />
        <button className="search-button" type = "submit">Search</button>
      </form>
    </div>
  );
}

export default App;

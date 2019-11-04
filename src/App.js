import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'e03c014b'
  const APP_KEY = '81c37b55a389866039cfd9824b61039c	'
// eslint-disable-next-line
  const SampleReq =
   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

   const [counter, setCounter] = useState(0);

   useEffect(() => {
     console.log("Effect has been run");
   });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type = "text" />
        <button className="search-button" type = "submit">search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;

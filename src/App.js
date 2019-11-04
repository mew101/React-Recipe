import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'e03c014b'
  const APP_KEY = '81c37b55a389866039cfd9824b61039c	'

  const sampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"free
;
  return (
    <div className="App">
      <h1>Hello react</h1>
    </div>
  );
}

export default App;

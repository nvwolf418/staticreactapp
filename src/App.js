import React from 'react';
import "./index.css";


  function myfunc(){
    fetch('https://testsetcookie.azurewebsites.net/api/testsetcookie')
    console.log('The link was clicked.');
  };
 

export default function App() {
  return (
    <div className="App">
      <button onClick={myfunc}>get cookies</button>
      <h2 id="cookievalue">Cookie value here</h2>
    </div>
  );
}

import React from 'react';
import "./styles.css";


  function myfunc(){
    fetch('https://testsetcookie.azurewebsites.net/api/testsetcookie').then(
      response=>{
        return response.json();
    })
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

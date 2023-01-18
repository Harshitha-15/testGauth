import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';

function App() {
  

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);

  }
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "987640259517-1stdc8orv68q5j85t4krvgs6port9327.apps.googleusercontent.com",
      callback: handleCallbackResponse

      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme:"outline", size: "large"}
      );


  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      
    </div>
  );
}

export default App;

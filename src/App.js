import logo from './logo.svg';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import './App.css';

function App() {
  const [user, setUser] = useState({});
  

  function handleCallbackResponse(response){
    console.log("Encoded refreshed token: " + response);
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

  }

  function handlesignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }


  // useEffect(() => {
  //   /*global google */
  //   google.accounts.id.initialize({
  //     client_id: "184143611841-t5th1u1ts9abhoo88p0npqb5tu6r7lhv.apps.googleusercontent.com",
  //     callback: handleCallbackResponse

  //     });

  //     google.accounts.id.renderButton(
  //       document.getElementById("signInDiv"),
  //       { type: "icon", size: "large"}
  //     );

  //     google.accounts.id.prompt();

 
  // }, []);

  window.onload = () => {
    window.google.accounts.id.initialize({
      client_id: "184143611841-t5th1u1ts9abhoo88p0npqb5tu6r7lhv.apps.googleusercontent.com",
      callback: handleCallbackResponse

      });

      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { type: "icon", size: "large"}
      );

      window.google.accounts.id.prompt();
  }

  

  return (
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length !=0 && 
      <button onClick={(e) => handlesignOut(e)}>Sign Out</button>

      }
      
      { user &&
      <div>
        <img src = {user.picture}></img>
        <h3> {user.name} </h3>
        </div>
      }
      
    </div>
  );
}

export default App;

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Components/Homepage/HomePage";
import LoginSignup from "./Components/Auth/Container";
import { useEffect, useState } from 'react';
import { auth } from './firebase';


function App() {
  const [username, setUsename] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user.displayName);
      if (user) {
        setUsename(user.displayName);
      } else (
        setUsename("")
      )
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <LoginSignup />
            }
          />
          <Route path='/home'
            element={
              <Home name={username} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

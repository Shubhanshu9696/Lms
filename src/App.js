import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { useState } from 'react'
import {PrivateRoute} from './components/PrivateRoute'
function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);


  return (
    <div className="App relative">
      <nav>
        <Navbar isLogedIn = {isLogedIn} setisLogedIn = {setIsLogedIn}  />
      </nav>
      <Routes>
        <Route path='/' element={<Signup setIsLoggedIn={setIsLogedIn}/>} />
        <Route path='/home' element={<Home isLogedIn={isLogedIn}/>} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLogedIn}/>} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLogedIn} />} />
        <Route path='/dashboard' element={
          // <PrivateRoute>
          //   
          // </PrivateRoute>
          <PrivateRoute isLogedIn={isLogedIn}>
            <Dashboard/>
          </PrivateRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;

import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { useState } from 'react'
import {PrivateRoute} from './components/PrivateRoute'
import Footer from './pages/Footer';
import CommentSection from './pages/CommentSection';
// import searchPage from './pages/SearchPage'


function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);


  return (
    <div className="App">
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
      {/* <CommentSection/>
      <Footer/> */}
    </div>
  );
}

export default App;

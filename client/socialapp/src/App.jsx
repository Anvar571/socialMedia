import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  const token = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={token ? <HomePage/> : <LoginPage/> }/>
          <Route path='/auth/register' element={<RegisterPage/>}/>
          <Route path='/auth/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

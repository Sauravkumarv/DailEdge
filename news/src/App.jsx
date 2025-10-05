import React from 'react'
import DailyEdge from '../DailyEdge'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'
import {  Routes,Route, BrowserRouter } from 'react-router-dom'
import Articles from './components/Articles'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     
   
        <Route path="/" element={ <DailyEdge/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={ <SignInPage/>} />
        <Route path="/articles" element={ <Articles/>} />
       
        <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

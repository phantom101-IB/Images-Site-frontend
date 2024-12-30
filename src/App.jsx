import React, { useState } from 'react'
import Form from './components/Form'
import Login from './components/Login'
import Pictures from './components/picture'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Landing from "./components/Landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <Pictures />
              <Form />
            </React.Fragment>
          } />

          {/* <Login /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/landing" element={<Landing />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

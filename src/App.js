import React from 'react';
import {Route, NavLink, HashRouter, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Jobs from './Jobs';
import Contact from './Contact';
import ContactUs from './ContactUs';

class App extends React.Component {
  render() {
    return(
      <HashRouter>
        <div>
          <div>
            <div>
              
              <div className = 'topimg'></div>
              <h1 className = "bodyh1">Northeastern University</h1>
            </div>
            
            <ul className = 'header'>
              <li><NavLink to = "/">Home</NavLink></li>
              <li><NavLink to = "/aboutUs">About Us</NavLink></li>
              <li><NavLink to = "/jobs">Jobs</NavLink></li>
              <li><NavLink to = "/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className = 'content'>
            <Routes>
              <Route  path = '/' element = {<Home/>}></Route>
              <Route  path = '/aboutUs' element = {<AboutUs/>}></Route>
              <Route  path = '/jobs' element = {<Jobs/>}></Route>
              <Route  path = '/contact' element = {<Contact/>}></Route>
              <Route  path = '/contactUs' element = {<ContactUs/>}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
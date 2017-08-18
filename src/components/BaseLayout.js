import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import {NavLink} from 'react-router-dom'
import logo from '../images/wfd-icon.png'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layout'>
        <header className='header'>
          <div id='main-nav'>
            <ul className='link-flex'>
              <NavLink to='/'><img src={logo} alt=' whats for dinner logo' /></NavLink>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
        {this.props.children}
        <footer className='footer'>
          <h4>© Copyright 2017 | Craig A Wendel</h4>
        </footer>
      </div>
    )
  }
}

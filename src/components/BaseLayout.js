import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import {NavLink, Link} from 'react-router-dom'
import logo from '../images/cooking-icon.png'
import whiteLogo from '../images/cooking-icon-white.png'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layout'>
        <div id='main-nav'>
          <div className='logo'>
            <NavLink exact to='/'><img src={logo} alt='whats for dinner logo' /></NavLink>
            <h3>What's For Dinner?</h3>
          </div>
          <ul className='nav-ul'>
            <NavLink to='/recipes' activeStyle={{color: '#16a085'}}><li>Search Recipes</li></NavLink>
            <NavLink to='/menu' activeStyle={{color: '#16a085'}}><li>Your Menu</li></NavLink>
            <NavLink to='/login' activeStyle={{color: '#16a085'}}><li>Log In</li></NavLink>
            <NavLink to='/signup' style={{backgroundColor: '#e74c3c', color: '#fff', padding: '1% 2%', width: '10%', borderRadius: '10px', textAlign: 'center'}}><li>Sign Up</li></NavLink>
          </ul>
        </div>
        {this.props.children}
        <footer className='footer'>
          <ul className='footer-ul'>
            <img id='footer-logo' src={whiteLogo} alt='whats for dinner logo' />
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/contact'><li>About</li></Link>
            <Link to='/legal'><li>Legal</li></Link>
          </ul>
          <h4>© Copyright 2017 | Craig A Wendel</h4>
        </footer>
      </div>
    )
  }
}

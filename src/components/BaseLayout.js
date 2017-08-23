import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import {NavLink} from 'react-router-dom'
import logo from '../images/wfd-icon.png'

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
            <NavLink to='/recipes' activeStyle={{color: '#27ae60'}}><li>Recipes</li></NavLink>
            <NavLink to='/menu' activeStyle={{color: '#27ae60'}}><li>Your Menu</li></NavLink>
            <NavLink to='/login' activeStyle={{color: '#27ae60'}}><li>Log In</li></NavLink>
            <NavLink to='/signup' style={{backgroundColor: '#27ae60', color: '#fff', padding: '1%', borderRadius: '10px'}}><li>Sign Up</li></NavLink>
          </ul>
        </div>
        {this.props.children}
        <footer className='footer'>
          <h4>© Copyright 2017 | Craig A Wendel</h4>
        </footer>
      </div>
    )
  }
}

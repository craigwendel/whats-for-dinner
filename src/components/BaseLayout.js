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
            <NavLink to='/recipes' activeStyle={{color: '#16a085'}}><li>Search Recipes</li></NavLink>
            <NavLink to='/menu' activeStyle={{color: '#16a085'}}><li>Your Menu</li></NavLink>
            <NavLink to='/login' activeStyle={{color: '#16a085'}}><li>Log In</li></NavLink>
            <NavLink to='/signup' style={{backgroundColor: '#16a085', color: '#fff', padding: '1% 2%', width: '10%', borderRadius: '10px', textAlign: 'center'}}><li>Sign Up</li></NavLink>
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

import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import {NavLink, Link} from 'react-router-dom'
import logo from '../images/cooking-icon.png'
import whiteLogo from '../images/cooking-icon-white.png'

export default class BaseLayout extends Component {

  navToggle () {
    let linksEl = document.querySelector('.narrow-links')
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none'
    } else {
      linksEl.style.display = 'block'
    }
  }

  render () {
    return (
      <div className='base-layout'>
        <div id='main-nav-desktop'>
          <div className='logo'>
            <NavLink exact to='/'><img src={logo} alt='whats for dinner logo' /></NavLink>
            <h3>What's For Dinner?</h3>
          </div>
          <div className='wide-div'>
            <NavLink to='/recipes' activeStyle={{color: '#16a085'}}>Search Recipes</NavLink>
            <NavLink to='/menu' activeStyle={{color: '#16a085'}}>Your Menu</NavLink>
            <NavLink to='/login' activeStyle={{color: '#16a085'}}>Log In</NavLink>
            <NavLink to='/signup' style={{backgroundColor: '#e74c3c', color: '#fff', padding: '1% 2%', width: '10%', borderRadius: '10px', textAlign: 'center'}}>Sign Up</NavLink>
          </div>
        </div>
        <div id='main-nav-mobile'>
          <i className='fa fa-bars fa-2x' onClick={this.navToggle} />
          <div className='logo'>
            <NavLink exact to='/'><img src={logo} alt='whats for dinner logo' /></NavLink>
            <h3>What's For Dinner?</h3>
            <NavLink to='/signup' style={{backgroundColor: '#e74c3c', color: '#fff', padding: '2% 3%', width: '25%', borderRadius: '10px', textAlign: 'center', textDecoration: 'none', marginLeft: '30%'}}>Sign Up</NavLink>
          </div>
          <div className='narrow-links'>
            <NavLink to='/recipes' activeStyle={{color: '#16a085'}} onClick={this.navToggle}>Search Recipes</NavLink>
            <NavLink to='/menu' activeStyle={{color: '#16a085'}} onClick={this.navToggle}>Your Menu</NavLink>
            <NavLink to='/login' activeStyle={{color: '#16a085'}}>Log In</NavLink>
          </div>
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

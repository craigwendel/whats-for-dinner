import React, { Component } from 'react'
import '../styles/BaseLayout.css'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import whiteLogo from '../images/cooking-icon-white.png'

export default class BaseLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: this.props.isLoggedIn
    }
  }
  render () {
    return (
      <div className='base-layout'>
        <NavBar />

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

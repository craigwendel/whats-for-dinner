import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
// import localStorage from 'local-storage'
import logo from '../images/cooking-icon.png'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false
      // signout: false,
      // token: localStorage.get('JWT')
    }
    // this.handleLogOut = this.handleLogOut.bind(this)
  }
  navToggle () {
    let linksEl = document.querySelector('.narrow-links')
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none'
    } else {
      linksEl.style.display = 'block'
    }
  }

  // handleLogOut (event) {
  //   console.log('button worked!')
  //   localStorage.remove('JWT')
  //   this.setState({signout: true})
  // }

  render () {
    let loginButton = null
    let signUpButton = null
    // console.log(this.state.loggedIn)
    if (this.state.loggedIn) {
      loginButton = <NavLink to='/login' activeStyle={{color: '#16a085'}}>Welcome Back!</NavLink>
      signUpButton = <NavLink to='/signup' style={{backgroundColor: '#e74c3c', color: '#fff', padding: '1% 2%', width: '15%', borderRadius: '10px', textAlign: 'center', textDecoration: 'none'}}>Log Out</NavLink>
    } else {
      loginButton = <NavLink to='/login' activeStyle={{color: '#16a085'}}>Log In</NavLink>
      signUpButton = <NavLink to='/signup' style={{backgroundColor: '#e74c3c', color: '#fff', padding: '1% 2%', width: '15%', borderRadius: '10px', textAlign: 'center', textDecoration: 'none'}}>Sign Up</NavLink>
    }

    // if (this.state.signout) {
    //   return <Redirect to='/login' />
    // }
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
            {loginButton}
            {signUpButton}
          </div>
        </div>
        <div id='main-nav-mobile'>
          <i className='fa fa-bars fa-2x' onClick={this.navToggle} />
          <div className='logo'>
            <NavLink exact to='/'><img src={logo} alt='whats for dinner logo' /></NavLink>
            <h3>What's For Dinner?</h3>
            {signUpButton}
          </div>
          <div className='narrow-links'>
            <NavLink to='/recipes' activeStyle={{color: '#16a085'}} onClick={this.navToggle}>Search Recipes</NavLink>
            <NavLink to='/menu' activeStyle={{color: '#16a085'}} onClick={this.navToggle}>Your Menu</NavLink>
            {loginButton}
          </div>
        </div>
      </div>
    )
  }
}

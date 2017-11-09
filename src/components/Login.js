import React, { Component } from 'react'
import localStorage from 'local-storage'
import {Redirect} from 'react-router-dom'
import vegetables from '../images/vegetables.jpeg'
import spaghetti from '../images/spaghetti.jpg'
// import NavBar from './NavBar'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      token: null,
      redirect: '',
      message: '',
      isLoggedIn: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleUsernameChange (event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }
  handleLogin (event) {
    this.setState({message: ''})
    event.preventDefault()
    fetch('https://whats-for-dinner-api.herokuapp.com/api/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(json => {
        console.log('User is logged in', json)
        if (json.success) {
          localStorage.set('JWT', json.token)
          this.setState({redirect: true, isLoggedIn: true})
        } else {
          this.setState({message: json.message})
        }
      })
  }
  render () {
    if (this.state.redirect) {
      return <Redirect to='/recipes' />
    }
    let errorStyling = ''
    let errorDiv = ''
    if (this.state.message) {
      errorStyling = 'errorStyling'
      errorDiv = (
        <div className='loginError'>{this.state.message}</div>
      )
    }

    return (
      <div className='login'>
        {/* <NavBar isLoggedIn={this.state.isLoggedIn} /> */}
        <div className='banner-text'>
          <h3>Log In</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${vegetables})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
        <div className='login-form'>
          <form className='form-data' onSubmit={this.handleLogin}>
            <div>
              <h4>Log In to your account:</h4>
              {errorDiv}
            </div>
            <div>
              <label>Username:</label>
              <input type='text' className={errorStyling} onChange={this.handleUsernameChange} value={this.state.username} placeholder='Your Username' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' className={errorStyling} onChange={this.handlePasswordChange} value={this.state.password} placeholder='Enter your password' />
            </div>
            <div>
              <input type='submit' id='submit' value='Log In' />
            </div>
          </form>
          <div className='form-image'>
            <img src={spaghetti} alt='bowl of spaghetti with marinara sauce' />
          </div>
        </div>
      </div>
    )
  }
}

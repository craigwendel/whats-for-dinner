import React, { Component } from 'react'
import vegetables from '../images/vegetables.jpeg'
import spaghetti from '../images/spaghetti.jpg'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
    event.preventDefault()
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='login'>
        <div className='banner-text'>
          <h3>Log In</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${vegetables})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
        <div className='login-form'>
          <form className='form-data' onSubmit={this.handleLogin}>
            <div>
              <h4>Log In to your account:</h4>
            </div>
            <div>
              <label>Username:</label>
              <input type='text' onChange={this.handleUsernameChange} value={this.state.username} placeholder='Your Username' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' onChange={this.handlePasswordChange} value={this.state.password} placeholder='Enter your password' />
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

import React, { Component } from 'react'
import dinner from '../images/salad-dinner.jpeg'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      username: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }
  handleUsernameChange (event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      name: '',
      email: '',
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='sign-up'>
        <div className='sign-up-text'>
          <h3>Sign Up</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${dinner})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '30vh'}} />
        <div className='sign-up-form'>
          <form className='sign-up-form-data' onSubmit={this.handleSubmit}>
            <div>
              <h4>Fill out the form below to sign up for What's For Dinner</h4>
            </div>
            <div>
              <label>Full Name:</label>
              <input type='text' onChange={this.handleNameChange} value={this.state.name} placeholder='Your Full Name' />
            </div>
            <div>
              <label>Email:</label>
              <input type='email' onChange={this.handleEmailChange} value={this.state.email} placeholder='Your Email Address' />
            </div>
            <div>
              <label>Username:</label>
              <input type='text' onChange={this.handleUsernameChange} value={this.state.username} placeholder='Your Username' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' onChange={this.handlePasswordChange} value={this.state.password} placeholder='Enter a password' />
            </div>
            <div>
              <input type='submit' id='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

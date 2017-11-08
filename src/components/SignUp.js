import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import pizza from '../images/pizza.jpg'
import dinner from '../images/salad-dinner.jpeg'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      registerSuccess: false
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
    fetch('https://whats-for-dinner-api.herokuapp.com/api/register', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(json => {
      console.log(json)
      if (json.status === 'success') {
        console.log('User created!')
        this.setState({
          name: '',
          email: '',
          username: '',
          password: '',
          registerSuccess: true
        })
      }
    })
  }

  render () {
    if (this.state.registerSuccess === true) {
      return <Redirect to='/login' />
    }

    return (
      <div className='sign-up'>
        <div className='banner-text'>
          <h3>Sign Up</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${dinner})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
        <div className='sign-up-form'>
          <form className='form-data' onSubmit={this.handleSubmit}>
            <div>
              <h4>Sign Up to get cooking!</h4>
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
              <input type='text' onChange={this.handleUsernameChange} value={this.state.username} placeholder='Create a Username' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' onChange={this.handlePasswordChange} value={this.state.password} placeholder='8 characters or more' />
            </div>
            <div>
              <input type='submit' id='submit' value='Submit' />
            </div>
          </form>
          <div className='form-image'>
            <img src={pizza} alt='pizza slice with vegatables surrounding it' />
          </div>
        </div>
      </div>
    )
  }
}

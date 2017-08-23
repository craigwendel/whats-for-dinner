import React, { Component } from 'react'
import '../styles/App.css'
import hero from '../images/heroimg.jpeg'
import {Link} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <div className='hero-text'>
            <h1>You select the ingredients you have on hand...</h1>
            <h2>and we show you recipes you can make!</h2>
            <div className='button-links'>
              <Link to='/search'><button>Search Recipes</button></Link>
              <Link to='/login'><button id='second-btn'>Log In </button></Link>
            </div>
          </div>
          <div id='hero' style={{backgroundImage: `url(${hero})`, backgroundSize: 'cover', width: '100%', height: '100vh'}} />
        </header>
      </div>
    )
  }
}

export default App

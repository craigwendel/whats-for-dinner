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
        <section>
          <div className='wfd-steps'>
            <div className='step-details'>
              <i className='fa fa-search' aria-hidden='true' />
              <h5>Find your Meal!</h5>
              <p>Search for recipes based off of the ingredients you have at home. No need to run to the store, we search for recipes that you can make right now!</p>
            </div>
            <div className='step-details'>
              <i className='fa fa-fire' aria-hidden='true' />
              <h5>Get Cooking!</h5>
              <p>Pick out the perfect recipe and get cooking!  We provide step by step instructions to prepare the perfect meal!</p>
            </div>
            <div className='step-details'>
              <i className='fa fa-cutlery' aria-hidden='true' />
              <h5>Dig In!</h5>
              <p>Enjoy your deliciously preparted meal. It's that simple with the What's For Dinner? app!</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App

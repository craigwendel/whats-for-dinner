import React, { Component } from 'react'
import '../styles/Homepage.css'
import heather from '../images/heatherg.jpg'
import john from '../images/johnf.png'
import sue from '../images/sueh.jpg'
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
  render () {
    return (
      <div className='homepage'>
        <header>
          <div className='hero-text'>
            <h1>You select the ingredients you have on hand...</h1>
            <h2>and we show you recipes you can make!</h2>
            <div className='button-links'>
              <Link to='/recipes'><button>Search Recipes</button></Link>
              <Link to='/login'><button id='second-btn'>Log In </button></Link>
            </div>
          </div>
          <div id='hero' />
        </header>
        <main>
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
              <p>Enjoy your deliciously prepared meal. It's that simple with the What's For Dinner? app!</p>
            </div>
          </div>
        </main>
        <section>
          <div className='reviews'>
            <div id='review-image'>
              <h3>What others are saying:</h3>
              <div className='all-reviews'>
                <div className='review-details'>
                  <img src={heather} alt='heather g profile pic' />
                  <p>
                    What's for Dinner was soooo easy! I never have time to run to the store with my busy schedule and I needed something prepared fast. I just searched for recipes with what I had on hand, and the pizza I whipped up was delecious!
                  </p>
                  <h6> - Heather G.</h6>
                </div>
                <div className='review-details'>
                  <img src={john} alt='john f profile pic' />
                  <p>
                    What can I say? I'm pretty lazy and never feel like making a special trip to the store for a couple ingredients. The chicken bacon alfredo was on point, and it impressed my lady friend. Win win!
                  </p>
                  <h6> - John F.</h6>
                </div>
                <div className='review-details'>
                  <img src={sue} alt='sue h profile pic' />
                  <p>
                    The recipes here are AMAZING! I also love the fact that I can make meal plans for the week and the suggestions are always great. What's For Dinner is my new go to application when I'm cooking!
                  </p>
                  <h6> - Sue H.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

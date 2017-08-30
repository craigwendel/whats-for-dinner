import React, { Component } from 'react'
import meat from '../images/meat.jpeg'

export default class Recipes extends Component {
  render () {
    return (
      <div className='recipes'>
        <div className='banner-text'>
          <h3>Recipes</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${meat})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
      </div>
    )
  }
}

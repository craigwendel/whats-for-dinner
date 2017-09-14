import React, {Component} from 'react'
import tablefood from '../images/tablefood.jpeg'

export default class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <div className='banner-text'>
          <h3>Your Menu</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${tablefood})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
      </div>
    )
  }
}

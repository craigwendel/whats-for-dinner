import React, { Component } from 'react'
import meat from '../images/meat.jpeg'

export default class Recipes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: ''
    }
    this.handleRecipeChange = this.handleRecipeChange.bind(this)
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this)
  }

  handleRecipeChange (event) {
    this.setState({ingredients: event.target.value})
  }

  handleRecipeSearch (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className='recipes'>
        <div className='banner-text'>
          <h3>Recipes</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${meat})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
        <div className='recipe-search'>
          <form onSubmit={this.handleRecipeSearch}>
            <div>
              <label>Search for Recipes Below:</label>
              <textarea onChange={this.handleRecipeChange} value={this.state.ingredients} placeholder='Enter ingredients separated by a comma' />
            </div>
            <div>
              <input type='submit' value='Search Recipes' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

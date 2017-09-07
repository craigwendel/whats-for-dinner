import React, { Component } from 'react'
import meat from '../images/meat.jpeg'
import RecipeResults from './RecipeResults'

const API_KEY = '8625f1056db3ef620c84c8ac700bd9eb'

export default class RecipeSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: '',
      recipes: []
    }
    this.handleRecipeChange = this.handleRecipeChange.bind(this)
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this)
  }

  handleRecipeChange (event) {
    this.setState({ingredients: event.target.value})
  }

  handleRecipeSearch () {
    this.setState({ingredients: this.state.ingredients})
    let ingredients = this.state.ingredients
    let recipeUrl = `http://food2fork.com/api/search?key=${API_KEY}&q=${ingredients}&sort=r`
    fetch(recipeUrl, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({recipes: responseData.recipes})
      console.log(responseData.recipes)
    })
    .catch((error) => {
      console.log('Fetching error:', error)
    })
  }

  render () {
    return (
      <div className='recipes'>
        <div className='banner-text'>
          <h3>Recipes</h3>
        </div>
        <div className='banner-img' style={{backgroundImage: `url(${meat})`, backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%', height: '40vh'}} />
        <div className='recipe-search'>
          <div className='search-details'>
            <h4>Search for Recipes Below:</h4>
          </div>
          <div className='search-details'>
            <textarea rows='2' cols='80' onChange={this.handleRecipeChange} value={this.state.ingredients} placeholder='Enter ingredients separated by a comma' />
          </div>
          <div className='search-details'>
            <button onClick={this.handleRecipeSearch}>Search Recipes</button>
          </div>
          <div className='search-results'>
            <RecipeResults recipes={this.state.recipes} />
          </div>
        </div>
      </div>
    )
  }
}

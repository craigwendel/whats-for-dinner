import React, { Component } from 'react'
import meat from '../images/meat.jpeg'
import RecipeResults from './RecipeResults'

const API_KEY = '8625f1056db3ef620c84c8ac700bd9eb'

export default class RecipeSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: '',
      recipes: [],
      searching: false,
      count: ''
    }
    this.handleRecipeChange = this.handleRecipeChange.bind(this)
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this)
  }

  handleRecipeChange (event) {
    this.setState({ingredients: event.target.value})
  }

  handleRecipeSearch () {
    let ingredients = this.state.ingredients
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const recipeUrl = `http://food2fork.com/api/search?key=${API_KEY}&q=${ingredients}&sort=r`
    this.setState({searching: true})
    fetch(proxyUrl + recipeUrl)
    .then(response => response.json())
    .then(responseData => {
      this.setState({recipes: responseData.recipes, count: responseData.count, searching: false})
      console.log(this.state.recipes)
    })
    .catch((error) => {
      console.log('Fetching error:', error)
    })
  }

  //   let ingredients = this.state.ingredients
  //   this.setState({searching: true})
  //   fetch(`${process.env.REACT_APP_API_SERVER}/http://food2fork.com/api/search?key=${API_KEY}=${ingredients}&sort=r`, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // .then(response => response.json())
  // .then(responseData => {
  //   this.setState({recipes: responseData.recipes, count: responseData.count, searching: false})
  //   console.log(this.state.recipes)
  // })
  // .catch((error) => {
  //   console.log('Fetching error:', error)
  // })
  // }

  render () {
    const isSearching = this.state.searching
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
          <div className='searching'>
            {isSearching &&
              <span>Searching<i className='fa fa-spinner fa-pulse fa-3x fa-fw' /></span>
            }
          </div>
          <div className='search-results'>
            <RecipeResults recipes={this.state.recipes} />
          </div>
        </div>
      </div>
    )
  }
}

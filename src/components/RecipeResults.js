import React, { Component } from 'react'
import RecipeInfoModal from './RecipeInfoModal'
import MealPlanModal from './MealPlanModal'

export default class RecipeResults extends Component {
  render () {
    return (
      <div className='recipe-results'>
        {this.props.recipes.map((recipe) =>
          <div className='recipe-map' key={recipe.recipe_id}>
            <ul className='recipe-details'>
              <img src={recipe.image_url} alt='' />
              <h4><a href={recipe.source_url} target='_blank'>{recipe.title}</a></h4>
              <h5>Rating: {Math.round(recipe.social_rank)}</h5>
              <div className='button-flex'>
                <RecipeInfoModal recipeURL={recipe.f2f_url} />
                <MealPlanModal recipeName={recipe.title} />
              </div>
            </ul>
          </div>
      )}
      </div>
    )
  }
}

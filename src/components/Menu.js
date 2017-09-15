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
        <div className='menu-heading'>
          <h4>Your recipes for the week!</h4>
        </div>
        <div className='days-of-week'>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Monday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Tuesday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Wednesday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Thursday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Friday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Saturday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
          <div className='days-flex'>
            <div className='individual-days'>
              <h5>Sunday</h5>
            </div>
            <div className='individual-meals'>
              <div className='meal-times'>
                <h6>Breakfast:</h6>
              </div>
              <div className='meal-times'>
                <h6>Lunch:</h6>
              </div>
              <div className='meal-times'>
                <h6>Dinner:</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

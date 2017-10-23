import React, {Component} from 'react'
import Modal from 'react-responsive-modal'

export default class MealPlanModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      recipeName: this.props.recipeName,
      date: 'monday',
      mealTime: 'breakfast',
      message: 'Submit'
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleMealChange = this.handleMealChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onOpenModal () {
    this.setState({open: true})
  }
  onCloseModal () {
    this.setState({open: false})
  }
  handleDateChange (event) {
    this.setState({date: event.target.value})
  }
  handleMealChange (event) {
    this.setState({mealTime: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({date: event.target.value, mealTime: event.target.value, message: 'Added to Menu'})
  }

  render () {
    const {open} = this.state

    return (
      <div className='meal-plan-modal'>
        <button onClick={this.onOpenModal}>Add to Meal Plan</button>
        <Modal open={open} onClose={this.onCloseModal} modalClassName='modal'>
          <form className='meal-plan-form' onSubmit={this.handleSubmit}>
            <h4>Add <strong>{this.state.recipeName}</strong> to your meal plan!</h4>
            <label>Choose the following Date:</label>
            <select value={this.state.date} onChange={this.handleDateChange}>
              <option value='monday'>Monday</option>
              <option value='tuesday'>Tuesday</option>
              <option value='wednesday'>Wednesday</option>
              <option value='thursday'>Thursday</option>
              <option value='friday'>Friday</option>
              <option value='saturday'>Saturday</option>
              <option value='sunday'>Sunday</option>
            </select>
            <label>Choose the Following Meal Time:</label>
            <select value={this.state.mealTime} onChange={this.handleMealChange}>
              <option value='breakfast'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
            </select>
            <input type='submit' value={this.state.message} id='form-submit' />
          </form>
        </Modal>
      </div>
    )
  }
}

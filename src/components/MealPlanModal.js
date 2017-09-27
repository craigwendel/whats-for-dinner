import React, {Component} from 'react'
import Modal from 'react-responsive-modal'

export default class MealPlanModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal () {
    this.setState({open: true})
  }
  onCloseModal () {
    this.setState({open: false})
  };

  render () {
    const {open} = this.state
    return (
      <div className='meal-plan-modal'>
        <button onClick={this.onOpenModal}>Add to Meal Plan</button>
        <Modal open={open} onClose={this.onCloseModal} modalClassName='modal'>
        </Modal>
      </div>
    )
  }
}

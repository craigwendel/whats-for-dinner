import React, {Component} from 'react'
import Modal from 'react-responsive-modal'

export default class RecipeInfoModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      recipe: this.props.recipeURL
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
      <div className='recipe-info-modal'>
        <button onClick={this.onOpenModal}>More Info</button>
        <Modal open={open} onClose={this.onCloseModal} modalClassName='modal'>
          <iframe src={this.state.recipe} title='modal-info' />
        </Modal>
      </div>
    )
  }
}

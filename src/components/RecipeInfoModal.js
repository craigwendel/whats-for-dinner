import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

export default class RecipeInfoModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal () {
    this.setState({ open: true })
  }
  onCloseModal () {
    this.setState({ open: false })
  };

  render () {
    const { open } = this.state
    return (
      <div className='recipe-info-modal'>
        <button onClick={this.onOpenModal}>More Info</button>
        <Modal open={open} onClose={this.onCloseModal} modalClassName='modal'>
          <h2>Title:</h2>
          <h4>Info:</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Button</button>
        </Modal>
      </div>
    )
  }
}

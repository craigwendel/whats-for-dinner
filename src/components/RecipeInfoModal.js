import React, {Component} from 'react'
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
          <iframe src='http://food2fork.com/view/To_Die_For_Blueberry_Muffins/32745' width='1000' height='550'></iframe>
        </Modal>
      </div>
    )
  }
}

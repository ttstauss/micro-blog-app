import React from 'react'
import Modal from 'react-modal'

export const DeletePostModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
  >
    <h3>Are you sure?</h3>
    <p>You will not be able to recover the posts.</p>
    <div>
      <button onClick={props.handleOnCancel}>Cancel</button>
      <button onClick={props.handleOnDelete}>Yes, delete it!</button>
    </div>
  </Modal>
)

Modal.setAppElement('#root')

export default DeletePostModal
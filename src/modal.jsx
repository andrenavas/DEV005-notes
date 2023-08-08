import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const addIcon = <FontAwesomeIcon icon={faPlus} size="2xl" style={{ color: "#FFFF", }} />
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} size="l" style={{ color: "#000", }} />


const NotesModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className='btn-open-modal' onClick={openModal}>{addIcon}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="add-note-modal"
      >
        <div className='container-input-textarea-add-note-modal'>
          <input type="text" placeholder='Type your title...' />
          <textarea className='text-tarea' id="" cols="30" rows="10" placeholder='Type your Note here ...'></textarea>
        </div>
        <div className='container-btn-add-note-modal'>
          <button onClick={closeModal}>Go back</button>
          <button> Save{sendIcon}</button>
        </div>


      </Modal>
    </div>
  );




}
export default NotesModal
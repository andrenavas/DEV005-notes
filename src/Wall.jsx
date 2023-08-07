import './Wall.css'
import MyNotesLogo from './assets/MyNotesLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Notes from './Notes.jsx'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#FFFF", }} />
const addIcon = <FontAwesomeIcon icon={faPlus} size="2xl" style={{ color: "#FFFF", }} />
const Wall = () => {
  const navigateTo = useNavigate();
  //crear el arreglo vacío que va a contener las notas
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('');

  const logout = () => {
    navigateTo('/');
  }

  const addNewNote = () => {
    setNotes([...notes, newNote]);
    setNewNote('');
    console.log('btn add notes')
  };
  console.log("arreglo notes", notes)



  return (
    <div className='wall-view'>
      <header className='header-wall'>
        <figure className='container-logo-wall'>
          <img src={MyNotesLogo} className='logo-wall' alt='My Notes Logo' />
        </figure>
        <div className='container-logout' onClick={logout}> {logoutIcon} Logout
        </div>
      </header>
      <main className='container-wall'>
      <div className='input-note'>HOLA</div>
        <section className='container-notes-wall'>
          <span className='text-span-wall'>Developers working ...</span>
          {notes.length > 0 ? (
            notes.map((note, index) => <Notes key={index} content={note} />)
          ) : (
            <p>No notes yet.</p>
          )}
        </section>
        <button className='btn-add-note' onClick={addNewNote} >{addIcon}</button>

      </main>
    </div>
  )
}
// const Wall = () => {
//   const navigateTo = useNavigate(); 
//   const [showNotes, setShowNotes] = useState(false);
//   const [notes, setNotes] = useState([]);

//   const logout = () => {
//     navigateTo('/');
//   }
//   const showNote = () => {
//     console.log('btn add notes')
//     setShowNotes(!showNotes);
//   };
//   const addNewNote = (note) => {
//     setNotes([...notes, note]); // Agrega una nueva nota al array de notas
//   };


//   return (
//     <div className='wall-view'>
//       <header className='header-wall'>
//         <figure className='container-logo-wall'>
//           <img src={MyNotesLogo} className='logo-wall' alt='My Notes Logo' />
//         </figure>
//         <div className='container-logout' onClick={logout}> {logoutIcon} Logout
//         </div>
//       </header>
//       <main className='container-wall'>
//         <section className='container-notes-wall'>
//           <span className='text-span-wall'>Developers working ...</span>
//           {showNotes && <Notes onAddNote={addNewNote} />}
//           <div>
//         {notes.map((note, index) => (
//           <div key={index}>
//             <p>{note}</p>
//           </div>
//         ))}
//       </div>
//         </section>
//         <button className='btn-add-note' onClick={showNote} >{addIcon}</button>

//       </main>
//     </div>
//   )
// }
export default Wall
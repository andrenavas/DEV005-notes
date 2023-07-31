import './wall.css'
import MyNotesLogo from './assets/MyNotesLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#FFFF", }} />
const Wall = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }

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
        <section className='container-post-wall'>
          <span className='text-span-wall'>Developers working ...</span>
        </section>
      </main>
    </div>
  )
}
export default Wall
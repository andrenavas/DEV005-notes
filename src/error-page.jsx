import './Wall.css'
import MyNotesLogo from './assets/MyNotesLogo.png'

const ErrorPage = () => {

  return (
    <div className='wall-view'>
      <header className='header-wall'>
        <h1 className='title-wall'>UNWELCOME ERROR 404</h1>
        <figure className='container-logo-wall'>
          <img src={MyNotesLogo} className='logo-wall' alt='My Notes Logo' />
        </figure>
      </header>
      <main className='container-wall'>
        <section className='container-post-wall'>
          <span className='text-span-wall'>OH OH OH ERROR 404 ...</span>          
        </section>

      </main>



    </div>
  )
}
export default ErrorPage
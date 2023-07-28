import './wall.css'
import MyNotesLogo from './assets/MyNotesLogo.png'

const Wall = () => {


  return (
    <div className='wall-view'>
      <header className='header-wall'>
        <h1 className='title-wall'>WELCOME TO</h1>
        <figure className='container-logo-wall'>
          <img src={MyNotesLogo} className='logo-wall' alt='My Notes Logo' />
        </figure>
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
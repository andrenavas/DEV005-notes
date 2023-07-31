import './login.css'
import MyNotesLogo from './assets/MyNotesLogo.png'
import { useForm } from "react-hook-form";
import { loginApp } from './lib/loginAuth.js'
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from './lib/googleAuth';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />

const Login = () => {
  const navigateTo = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    loginApp(data.email, data.password, console.error)
    .then((loginSuccessful) => {
      if(loginSuccessful){
        navigateTo('/wall')
      }
    })
  }

  const loginGoogle = () => {
    loginWithGoogle()
    .then((loginSuccessful) => {
      if(loginSuccessful){
        navigateTo('/wall')
      }
    })
  }

  const navigateToRegister = () => {
    navigateTo('/register');
  }

  return (
    <div className='login-view'>
      <header className='header-login'>
        <h1 className='title-login'>WELCOME TO</h1>
        <figure className='container-logo-login'>
          <img src={MyNotesLogo} className='logo-login' alt='My Notes Logo' />
        </figure>
      </header>

      <main className='container-form-login'>
        <form className='login-form'onSubmit={handleSubmit(onSubmit)}>
          {/* Revisar si necesitamos agregar value y onChange*/}
          <input className='input-login'type='email'{...register('email', { required: true })} placeholder='EMAIL' />
          {errors.email && <p>This file is required</p>}
          <input className='input-login'type='password'{...register('password', { required: true })} placeholder='PASSWORD' />
          {errors.password && <p>This file is required</p>}
          <input className='btn-all btn-login-submit' type="submit" value="LOG IN" />
        </form>
        <section className='container-register-google'>
          <span className='text-span'>¿Do not have an account yet?</span>
          <a className='text-span link-to-register' onClick={navigateToRegister}>Create an account here!</a>
          <button className='btn-all btn-login-google' onClick={loginGoogle}>LOG IN WITH GOOGLE</button>
        </section>
      </main>
    </div>
  )
}
export default Login

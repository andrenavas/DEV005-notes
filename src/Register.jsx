import './Register.css'
import MyNotesLogo from './assets/MyNotesLogo.png'
import { useForm } from "react-hook-form";
import { registerApp } from './lib/registerAuth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigateTo = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        registerApp(data.email, data.password, console.error)
        .then((loginSuccessful) => {
        if(loginSuccessful){
            navigateTo('/wall')
        }
        })
    }
    const navigateToLogin = () => {
      navigateTo('/');
    }

  return (
    <div className='register-view'>
      <header className='header-register'>
        <h1 className='title-register'>REGISTER</h1>
        <figure className='container-logo-register'>
          <img src={MyNotesLogo} className='logo-register' alt='My Notes Logo' />
        </figure>
      </header>

      <main className='container-form-register'>
        <form className='register-form'onSubmit={handleSubmit(onSubmit)}>
          {/* Revisar si necesitamos agregar value y onChange*/}
          <input className='input-register'type='email'{...register('email', { required: true })} placeholder='EMAIL' />
          {errors.email && <p>This file is required</p>}
          <input className='input-register'type='password'{...register('password', { required: true })} placeholder='PASSWORD' />
          {errors.password && <p>This file is required</p>}
          <input className='btn-all btn-register-submit' type="submit" value="REGISTER" />
        <section className='container-register-login'>
          <span className='text-span-register'>Do you have an account already?</span>
          <a className='text-span link-to-login' onClick={navigateToLogin}>Go back to login!</a>
        </section>
        </form>
        

      </main>



    </div>
  )
}
export default Register

import './login.css'
import MyNotesLogo from './assets/MyNotesLogo.png'
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('Click a Login', data);

  return (
    <div className='login-view'>
      <header className='header-login'>
        <h1 className='title-login'>WELCOME TO</h1>
        <figure className='container-logo-login'>
          <img src={MyNotesLogo} className='logo-login' alt='My Notes Logo' />
        </figure>
      </header>

      <main className='container-form-login'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Revisar si necesitamos agregar value y onChange*/}
          <input type='email'{...register('email', { required: true })} placeholder='Email' />
          {errors.email && <p>This file is required</p>}
          <input type='password'{...register('password', { required: true })} placeholder='Password' />
          {errors.password && <p>This file is required</p>}
          <input type="submit" />
        </form>

      </main>



    </div>
  )
}
export default Login

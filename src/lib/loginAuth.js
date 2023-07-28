import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase.js"

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export const loginApp = (email, password, loginError) => {
signInWithEmailAndPassword(auth,email,password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    password = '';
      // Posibles errores de autenticación
      if (error.code === 'auth/wrong-password') {
        loginError.textContent = 'Contraseña incorrecta';
      } else if (error.code === 'auth/user-not-found') {
        loginError.textContent = 'El usuario no existe';
      } else if (error.code === 'auth/invalid-email') {
        loginError.textContent = 'Correo inválido';
      } else if (error.code === 'auth/too-many-requests') {
        loginError.textContent = 'Demasiados intentos';
      } else if (error.code === 'auth/missing-password') {
        loginError.textContent = 'Ingrese una contraseña';
      } else {
        loginError.textContent = 'Ingresa los datos requeridos';
      }
    
  });
 }

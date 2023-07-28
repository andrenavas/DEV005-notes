import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase.js"

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export const loginApp = (email, password, loginError) => {
 return signInWithEmailAndPassword(auth,email,password)
.then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    return true
  })
  .catch((error) => {
    password = '';
      // Posibles errores de autenticación
      if (error.code === 'auth/wrong-password') {
        loginError('Contraseña incorrecta');
      } else if (error.code === 'auth/user-not-found') {
        loginError('El usuario no existe');
      } else if (error.code === 'auth/invalid-email') {
        loginError('Correo inválido');
      } else if (error.code === 'auth/too-many-requests') {
        loginError('Demasiados intentos');
      } else if (error.code === 'auth/missing-password') {
        loginError('Ingrese una contraseña');
      } else {
        loginError('Ingresa los datos requeridos');
      }
      return false
  });
 }

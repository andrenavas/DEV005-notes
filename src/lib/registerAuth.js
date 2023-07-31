import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const registerApp = (email, password, registerError) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return true;
    })
    .catch((error) => {
        password = '';
        // Posibles errores de autenticación
        if (error.code === 'auth/wrong-password') {
          registerError('Wrong password');
        } else if (error.code === 'auth/email-already-in-use') {
          registerError('Email already in use');
        } else if (error.code === 'auth/invalid-email') {
          registerError('Invalid email');
        } else if (error.code === 'auth/too-many-requests') {
          registerError('Too many requests');
        } else if (error.code === 'auth/missing-password') {
          registerError('Missing-password');
        } else if (error.code === 'auth/weak-password'){
          registerError('Weak password')
        } else if (error.code === 'auth/missing-email') {
          registerError = 'Missing email';
        } else {
          registerError('Enter the required data');
        }
        return false
    });
}

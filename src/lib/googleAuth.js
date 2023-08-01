import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const loginWithGoogle = () => {
    return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('Token',token);
      const user = result.user;
      console.log('User',user);
      return true;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('ErrorCode', errorCode, 'ErrorMessage', errorMessage)
      const email = error.customData.email;
      console.log('Email', email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('Credential', credential);
      return false;
    });
}

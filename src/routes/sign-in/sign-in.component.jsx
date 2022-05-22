import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  
  const logGoogleUserPopup = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('userDocRef: ', userDocRef)
  }
  
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response);
  // }
  
  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUserPopup}>Sign in with Google Popup</button>
      <button onClick={logGoogleUserPopup}>Sign in with Google Redirect</button>
    </div>
  )
}

export default SignIn;
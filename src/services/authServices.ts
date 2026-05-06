import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithRedirect // Cambiamos Popup por Redirect
} from "firebase/auth";
import { auth } from "./firebase";

// Registro con Email y Password
export const registerUser = (email: string, pass: string) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};

// Login con Email y Password
export const loginUser = (email: string, pass: string) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

// Logout
export const logoutUser = () => {
  return signOut(auth);
};

// Login con Google (Extra Credit)
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  // Al usar Redirect, la consola quedará limpia de errores Cross-Origin
  return signInWithRedirect(auth, provider);
};
import firebase from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";

const auth = firebase.auth;

const registerUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

const logoutUser = () => {
  auth.signOut();
};

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    throw error;
  }
};

const subscribeToAuthChanges = (handleAuthChanges) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChanges(user);
  });
};

const resetPassword = async (email) => {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const FirebaseAuthService = {
  getAuth,
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  loginWithGoogle,
  subscribeToAuthChanges,
  sendEmailVerification,
};

export default FirebaseAuthService;

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6YWoJjCWDMjp9p8eUremJjK1u4St8ruo",
  authDomain: "giphy-f0f27.firebaseapp.com",
  projectId: "giphy-f0f27",
  storageBucket: "giphy-f0f27.appspot.com",
  messagingSenderId: "571112004961",
  appId: "1:571112004961:web:755e9ed8fe3c3d64b93920",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

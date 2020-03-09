import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJHZRI01LDK-aGm_tvfwHLUKVDP8F6uoo",
  authDomain: "tmdb-movie-app.firebaseapp.com",
  databaseURL: "https://tmdb-movie-app.firebaseio.com",
  projectId: "tmdb-movie-app",
  storageBucket: "tmdb-movie-app.appspot.com",
  messagingSenderId: "894860019248",
  appId: "1:894860019248:web:6bae2e2dce08b006240ff5",
  measurementId: "G-995W50NDG2"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;

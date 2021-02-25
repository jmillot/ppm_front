import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDdF9RF79fPDjP2zuBsAJGpBW_LgSIYax0',
  authDomain: 'mtp-ppm.firebaseapp.com',
  projectId: 'mtp-ppm',
  storageBucket: 'mtp-ppm.appspot.com',
  messagingSenderId: '289692904736',
  appId: '1:289692904736:web:9f5445865a59f5c3fa3b45',
  databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export { auth, database, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider };

import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQjLcpUlTqm11gau6SVGm8O13S4yQ7zLM",
  authDomain: "chatbox-app-9b9f9.firebaseapp.com",
  databaseURL: "https://chatbox-app-9b9f9.firebaseio.com",
});

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base

import Rebase from 're-base'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDNQe6x55shYsxqGQsAhJH0Ukkb6L-tsP0",
    authDomain: "send-request-cbd1d.firebaseapp.com",
    databaseURL: "https://send-request-cbd1d.firebaseio.com",
    projectId: "send-request-cbd1d",
    storageBucket: "",
    messagingSenderId: "587836360424",
    appId: "1:587836360424:web:8cd5544af4fff9e5"
  };
  
var app = firebase.initializeApp(firebaseConfig);

var base = Rebase.createClass(app.database());

export default base
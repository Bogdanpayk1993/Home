import Rebase from '../../../node_modules/re-base'
import firebase from '../../../node_modules/firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCqH4S40ZFjM8mXQLfxwXCWL4lwUbJ4k14",
  authDomain: "mastercomp-d257a.firebaseapp.com",
  databaseURL: "https://mastercomp-d257a.firebaseio.com",
  projectId: "mastercomp-d257a",
  storageBucket: "",
  messagingSenderId: "19763201358",
  appId: "1:19763201358:web:cff8427a31b80538"
};

var app = firebase.initializeApp(firebaseConfig);

var Base = Rebase.createClass(app.database());

export default Base

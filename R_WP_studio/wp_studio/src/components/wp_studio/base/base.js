import Rebase from 're-base'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAIyRyQXsPqzOwfQ9PlS4iHi8yLklr2DV4",
    authDomain: "wpstudio-4e5b3.firebaseapp.com",
    databaseURL: "https://wpstudio-4e5b3.firebaseio.com",
    projectId: "wpstudio-4e5b3",
    storageBucket: "wpstudio-4e5b3.appspot.com",
    messagingSenderId: "881712286732",
    appId: "1:881712286732:web:3a626a219f673ee10bb229"
};

var app = firebase.initializeApp(firebaseConfig)
var base = Rebase.createClass(app.database())

export default base
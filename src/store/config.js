import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBLA-hQx8bX2_Q96iCj0pyGl8peAQ_RRKw",
    authDomain: "first-app-37296.firebaseapp.com",
    databaseURL: "https://first-app-37296.firebaseio.com",
    projectId: "first-app-37296",
    storageBucket: "first-app-37296.appspot.com",
    messagingSenderId: "672054048895"
};
let fire = firebase.initializeApp(config);

export default fire
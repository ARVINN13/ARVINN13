import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCgyiHPBJ7GKhM72-wavK3RsUpd4r7V4Pk",
  authDomain: "optimal-deadc.firebaseapp.com",
  databaseURL: "https://optimal-deadc-default-rtdb.firebaseio.com",
  projectId: "optimal-deadc",
  storageBucket: "optimal-deadc.appspot.com",
  messagingSenderId: "148296325460",
  appId: "1:148296325460:web:e4b3b26c582d3c222490c1"
};

 firebase.initializeApp(firebaseConfig);

 export default firebase;

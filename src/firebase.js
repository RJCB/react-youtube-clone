import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDf2NdAOuYLeehNHlFcGzlbRlO1EgrTYe8",
    authDomain: "yutube-react-clone.firebaseapp.com",
    projectId: "yutube-react-clone",
    storageBucket: "yutube-react-clone.appspot.com",
    messagingSenderId: "264713438790",
    appId: "1:264713438790:web:7531041381c582c2732c47"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
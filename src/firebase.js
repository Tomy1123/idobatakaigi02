import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCtko24il-IMgleuOeepfJIIGT20bRKyog",
  authDomain: "idobatakaigi02.firebaseapp.com",
  projectId: "idobatakaigi02",
  storageBucket: "idobatakaigi02.appspot.com",
  messagingSenderId: "521153050976",
  appId: "1:521153050976:web:b48cf9243acc571529c605"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text}) => {
  messageRef.push({ name, text});
};
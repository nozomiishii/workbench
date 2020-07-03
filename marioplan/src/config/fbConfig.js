import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCIkoUVNTCbqxG9sjbccXFrF1Tr7bJu28',
  authDomain: 'marioplan-c096d.firebaseapp.com',
  databaseURL: 'https://marioplan-c096d.firebaseio.com',
  projectId: 'marioplan-c096d',
  storageBucket: 'marioplan-c096d.appspot.com',
  messagingSenderId: '616744078002',
  appId: '1:616744078002:web:9af0dfe75671a15c3fd7ab',
  measurementId: 'G-MG6NQ0PBMQ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

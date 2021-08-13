import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAbIkttcbC_OEODJNNr6Ov16xHAzob96Uo',
  authDomain: 'clone-d3976.firebaseapp.com',
  projectId: 'clone-d3976',
  storageBucket: 'clone-d3976.appspot.com',
  messagingSenderId: '1063468833189',
  appId: '1:1063468833189:web:62fc3e8294669f8414304c',
  measurementId: 'G-NZYKQP228H',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

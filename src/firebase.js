import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBJ69UAZAGV4g72PCQYGeaa77rljtdU-MA',
	authDomain: 'todo-list-8009d.firebaseapp.com',
	projectId: 'todo-list-8009d',
	storageBucket: 'todo-list-8009d.appspot.com',
	messagingSenderId: '958210923214',
	appId: '1:958210923214:web:4d740e2fdebac2bd974e9f',
	measurementId: 'G-X100T0LY85'
});
const db = firebaseApp.firestore();

export default db;

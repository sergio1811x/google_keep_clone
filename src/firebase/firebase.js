import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, onValue, push, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCusoip4O4GFmUNRh-iEcjH4oc__EQdA70',
  authDomain: 'keep-45d61.firebaseapp.com',
  databaseURL: 'https://keep-45d61-default-rtdb.firebaseio.com',
  projectId: 'keep-45d61',
  storageBucket: 'keep-45d61.appspot.com',
  messagingSenderId: '927453467027',
  appId: '1:927453467027:web:34dd547ee02b54f71c5866',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const starCountRef = ref(db, 'notes/');

//Создание realtime базы
export const createNote = (title, content) => {
  const id = push(child(starCountRef, 'value')).key;
  set(ref(db, 'notes/' + id), {
    title: title,
    content: content,
  });
};

//  Берем данные
export const getNotes = () => {
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
  });
};

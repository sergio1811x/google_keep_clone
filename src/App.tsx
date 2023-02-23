import React, { useEffect, useState } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import { CreateForm } from './components/CreateForm';
import { Notes } from './components/Notes';
import { createNote } from './firebase/firebase';
import { getDatabase, onValue, ref } from 'firebase/database';

function App() {
  const [changeTitle, setChangeTitle] = useState('');
  const [changeContent, setChangeContent] = useState('');
  const [data, setData] = useState({});

  console.log(document);

  // добавление текста в базу firebase
  const handleCreateNote = () => {
    if (changeTitle.length > 0 || changeContent.length > 0) {
      createNote(changeTitle, changeContent);
      setChangeContent('');
      setChangeTitle('');
    }
  };

  //  Берем данные  из firebase realtime
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'notes/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);
  const values = Object.values(data || {}).reverse();

  return (
    <div className={'app'}>
      <Header />
      <CreateForm
        changeTitle={changeTitle}
        setChangeTitle={setChangeTitle}
        changeContent={changeContent}
        setChangeContent={setChangeContent}
        handleCreateNote={handleCreateNote}
      />
      <Notes values={values} />
    </div>
  );
}

export default App;

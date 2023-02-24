import React, { useEffect, useRef, useState } from 'react';
import './styles/main.scss';
import Header from './components/Header';
import { CreateForm } from './components/CreateForm';
import { Notes } from './components/Notes';
import { createNote } from './firebase/firebase';
import { getDatabase, onValue, ref, update, remove } from 'firebase/database';
import { Modal } from './components/Modal';
import { useComponentVisible } from './hook/useComponentVisible';

function App() {
  const [dataTitle, setDataTitle] = useState('');
  const [dataContent, setDataContent] = useState('');
  const [changeTitle, setChangeTitle] = useState('');
  const [changeContent, setChangeContent] = useState('');
  const [data, setData] = useState({}); // данные realtime
  const [noteData, setNoteData] = useState<any>([]); //данные карточки

  const { ref: modalRef, isComponentVisible, setIsComponentVisible } = useComponentVisible();

  // добавление текста в базу firebase
  const handleCreateNote = () => {
    if (dataTitle.length > 0 || dataContent.length > 0) {
      createNote(dataTitle, dataContent);
      setDataTitle('');
      setDataContent('');
    }
  };

  //  Берем данные  из firebase realtime
  const db = getDatabase();
  const starCountRef = ref(db, 'notes/');
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);
  const values = Object.entries(data || {}).reverse();

  //Изменяем значение карточки
  const handleChangeNote = () => {
    update(ref(db, 'notes/' + noteData[0]), {
      title: changeTitle.length > 0 ? changeTitle : noteData[1].title,
      content: changeContent.length > 0 ? changeContent : noteData[1].content,
    });
    setIsComponentVisible(false);
    setChangeContent('');
    setChangeTitle('');
  };

  //Удаляем карточку из базы
  const handleDeleteNote = () => {
    remove(ref(db, 'notes/' + noteData[0]));
    setIsComponentVisible(false);
  };

  /////
  const handleClickToNote = (value: any) => {
    setNoteData(value);
    setIsComponentVisible(true);
  };

  return (
    <div className={'app'}>
      <Header />
      <CreateForm
        dataTitle={dataTitle}
        setDataTitle={setDataTitle}
        dataContent={dataContent}
        setDataContent={setDataContent}
        handleCreateNote={handleCreateNote}
      />
      <Notes values={values} handleClickToNote={handleClickToNote} />
      {isComponentVisible && (
        <Modal
          modalRef={modalRef}
          noteData={noteData}
          setChangeTitle={setChangeTitle}
          setChangeContent={setChangeContent}
          handleDeleteNote={handleDeleteNote}
          handleChangeNote={handleChangeNote}
        />
      )}
    </div>
  );
}

export default App;

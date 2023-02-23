import React, { FC } from 'react';

interface ICreateForm {
  changeTitle: string;
  changeContent: string;
  setChangeTitle: React.Dispatch<React.SetStateAction<string>>;
  setChangeContent: React.Dispatch<React.SetStateAction<string>>;
  handleCreateNote: () => void;
}

export const CreateForm: FC<ICreateForm> = ({
  changeTitle,
  setChangeTitle,
  changeContent,
  setChangeContent,
  handleCreateNote,
}) => {
  return (
    <div className={'create-form'}>
      <div className={'backdrop'} />

      <div className={'create-note'}>
        <input
          value={changeTitle}
          type={'text'}
          placeholder={'Title'}
          name={'title'}
          onChange={(e) => setChangeTitle(e.target.value)}
        />

        <p>
          <textarea
            value={changeContent}
            name={'content'}
            placeholder={'Take a note...'}
            onChange={(e) => setChangeContent(e.target.value)}
          ></textarea>
        </p>

        <button className={'button_add'} onClick={() => handleCreateNote()}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

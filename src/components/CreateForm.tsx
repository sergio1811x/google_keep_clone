import React, { FC } from 'react';
import { useComponentVisible } from '../hook/useComponentVisible';

interface ICreateForm {
  dataTitle: string;
  dataContent: string;
  setDataTitle: React.Dispatch<React.SetStateAction<string>>;
  setDataContent: React.Dispatch<React.SetStateAction<string>>;
  handleCreateNote: () => void;
}

export const CreateForm: FC<ICreateForm> = ({
  dataTitle,
  setDataTitle,
  dataContent,
  setDataContent,
  handleCreateNote,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

  return (
    <div className={'create-form'}>
      <div className={'create-note'} ref={ref} onClick={() => setIsComponentVisible(true)}>
        {isComponentVisible && (
          <input
            value={dataTitle}
            type={'text'}
            placeholder={'Title'}
            name={'title'}
            onChange={(e) => setDataTitle(e.target.value)}
          />
        )}
        <p>
          <textarea
            value={dataContent}
            name={'content'}
            placeholder={'Take a note...'}
            onChange={(e) => setDataContent(e.target.value)}
          ></textarea>
        </p>

        <button className={'button_add'} onClick={() => handleCreateNote()}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

import React, { FC } from 'react';

interface IModal {
  setChangeTitle: React.Dispatch<React.SetStateAction<string>>;
  setChangeContent: React.Dispatch<React.SetStateAction<string>>;
  noteData: Array<{ title: string; content: string }>;
  handleDeleteNote: () => void;
  handleChangeNote: () => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const Modal: FC<IModal> = ({
  noteData,
  setChangeTitle,
  setChangeContent,
  handleDeleteNote,
  handleChangeNote,
  modalRef,
}) => {
  return (
    <div className={'modal-backdrop'}>
      <div className={'modal'}>
        <div className={'edit-form'} ref={modalRef}>
          <input
            defaultValue={noteData[1].title}
            name="title"
            placeholder={'Title'}
            onChange={(e) => setChangeTitle(e.target.value)}
          />
          <textarea
            defaultValue={noteData[1].content}
            name="content"
            placeholder={'Take a note...'}
            onChange={(e) => setChangeContent(e.target.value)}
          />
          <div className={'modal_footer'}>
            <button className={'submit-button '} onClick={() => handleChangeNote()}>
              <span>Done</span>
            </button>
            <button className={'delete-button'} onClick={() => handleDeleteNote()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

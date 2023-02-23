import React from 'react';

function Header() {
  return (
    <div className={'logos'}>
      <img className={'logo_keep'} src={require('../assets/images/keep.png')} alt={'keep'} />
      <span className={'plus'}>+</span>
      <img className={'logo_react'} src={require('../assets/images/react.png')} alt={'react'} />
      <span className={'plus'}>+</span>
      <img
        className={'logo_typescript'}
        src={require('../assets/images/typescript.png')}
        alt={'typescript'}
      />
      <span className={'plus'}>+</span>
      <img
        className={'logo_firebase'}
        src={require('../assets/images/firebase.png')}
        alt={'firebase'}
      />
    </div>
  );
}

export default Header;

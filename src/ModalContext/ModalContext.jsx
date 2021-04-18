import React, { useState } from 'react';

export const ModalContext = React.createContext();
export const ModalOnOfContext = React.createContext();

const ModalProvider = ({children})=>{

  const [modalActive, setModalActive] = useState(!true);

  const modalOnOff = ()=> {
    setModalActive(!modalActive);
  };
  

  return (
    <ModalContext.Provider value={[modalActive, setModalActive]}>
      <ModalOnOfContext.Provider value={modalOnOff}>
        {children}
      </ModalOnOfContext.Provider>
    </ModalContext.Provider>
  )
};

export default ModalProvider;
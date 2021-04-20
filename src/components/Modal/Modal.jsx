import styled from 'styled-components';
import { useContext, useState } from "react";
import {ModalContext} from '../../ModalContext/ModalContext';
import ReactInputMask from 'react-input-mask';

const Modal = ()=>{

  const [modal, setModal] = useContext(ModalContext);
  const [inputName, setInputName] = useState();
  const [inputTel, setInputTel] = useState();
 
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", `${inputName}`);
    formData.append("tel", `${inputTel}`);
    
    let promise = fetch('/send.php?user_name=' + inputName + '&tel=' + inputTel);
    promise.then(
      response => {
        setInputName('');
        setInputTel('');
        setModal(false);
      }
    ).catch(data=>{
          alert('fold')
    })
  };

  if(!modal) return null

  return (<S.Wrapper className='modalForm' onClick={()=>{
      setModal(false)
    }}>
      <div className='blur'></div>
      <div className="resultokno" onClick={e=>e.stopPropagation()}>
        <form
          action="" 
          method="GET" 
          className='modalForm__context'
          id="form" 
          onSubmit={e=>onSubmit(e)}
          >
          <p>Связаться с нами: </p>
          <div className='modalForm__name'>
            <p>Имя</p>
            <input value={inputName} 
              maxLength='10' 
              placeholder='Введите ваше имя' 
              onChange={e=>setInputName(e.target.value)} 
              name='user_name'/>
          </div>
          <div className='modalForm__mail'>
            <p>Mail</p>
            <ReactInputMask type='tel' 
              name='tel' 
              mask='+375(99)999-99-99' 
              value={inputTel} 
              onChange={e=>setInputTel(e.target.value)} 
              placeholder='Введите телефон для связи'/>
          </div>
          <button className='modalForm__button'>Отправить</button>
        </form>
      </div>
    </S.Wrapper>)
};

export default Modal;

const S = {
  Wrapper: styled.div`
    .blur {
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(2px);
        position: absolute;
    }
    
  `
}
import styled from 'styled-components';
import { useContext, useState } from "react";
import {ModalContext} from '../../ModalContext/ModalContext';
import ReactInputMask from 'react-input-mask';
import validator from 'validator'; 

const Modal = ()=>{
console.log(1)
  const [modal, setModal] = useContext(ModalContext);
  const [inputName, setInputName] = useState();
  const [inputTel, setInputTel] = useState();
  const [modalMassage, setModalMassage ] = useState(false);
  const [massageAnswer, setMassageAnswer] =useState();
  const [modalMassegeOk, setModalmassegeOk] = useState();

  const onSubmit = e => {
    e.preventDefault();
    let inp = e.target[1].value.replace(/\D/g, '').replace(/^7/, '8');
    if(validator.isMobilePhone(`${inp}`,['be-BY', [true]])){
      const formData = new FormData();
      formData.append("user_name", `${inputName}`);
      formData.append("tel", `${inputTel}`);
      
      let promise = fetch('/send.php?user_name=' + inputName + '&tel=' + inputTel);
      promise.then(
        response => {
          if(response.status>=200 && response.status<=300) {
            setInputName('');
            setInputTel('');
            setMassageAnswer('Ваше сообщение отправленно успешно. Мы с вами свяжемся в ближайшее время.')
            setModalmassegeOk(true);
            setModalMassage(true);
            setTimeout(()=>{
              setModalMassage(false);
              setModal(false);
            }, 2000)
          }
        }
      ).catch(data=>{
        setMassageAnswer('Ошибка');
        setModalmassegeOk(false);
        setModalMassage(true);
        setTimeout(()=>{
          setModalMassage(false);
        }, 2000)
      })
    }
    setMassageAnswer('Вы не правельно ввели телефон!')
    setModalmassegeOk(false);
    setModalMassage(true);
    setTimeout(()=>{
      setModalMassage(false);
    }, 2000)
  };

  if(!modal) return null


  return (<S.Wrapper className={!modalMassage ? 'modalForm' : 'modalForm modalFormActiveMassage'} onClick={()=>{
      setModal(false)
    }}>
      <div className='blur'></div>
      <div className="resultokno" onClick={e=>e.stopPropagation()}>
        {modalMassage ? <div className={modalMassegeOk ? 'modal__answer modal__answer_ok': 'modal__answer modal__answer_notOk' } ><p>{massageAnswer}</p></div> : <form
          action="" 
          method="GET" 
          className='modalForm__context'
          id="form" 
          onSubmit={e=>onSubmit(e)}
          >
            <div className='modalForm__close'onClick={()=>{
      setModal(false)
      }}>
              <span className='modalForm__close_one'></span>
              <span className='modalForm__close_two'></span>
            </div>
          <p className='modalForm__header'>Связаться с нами </p>
          <div className='modalForm__name'>
            <p>Введите <span>Ваше</span> имя:</p>
            <input value={inputName} 
              maxLength='10' 
              placeholder='Введите ваше имя' 
              onChange={e=>setInputName(e.target.value)} 
              name='user_name'/>
          </div>
          <div className='modalForm__tel'>
            <p>Введите номер телефона:</p>
            <ReactInputMask type='tel' 
              name='tel' 
              mask='+375(99)999-99-99' 
              value={inputTel} 
              onChange={e=>setInputTel(e.target.value)} 
              placeholder='Введите телефон для связи'/>
          </div>
          <button className='modalForm__button'>Отправить</button>
        </form>
        }
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
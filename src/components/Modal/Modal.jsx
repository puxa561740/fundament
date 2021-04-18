import styled from 'styled-components';
import { useContext } from "react";
import {ModalContext} from '../../ModalContext/ModalContext';

const Modal = ()=>{

  const [modal, setModal] = useContext(ModalContext);

  if(!modal) return null

  return (<S.Wrapper className='modalForm' onClick={()=>{
      setModal(false)
    }}>
      <div className='blur'></div>
      <div className="resultokno">
        <form action="" method="post" enctype="multipart/form-data" className="ui-sortable"> 
          <span style="">
            <div className="zagtext">Связаться</div>
          </span> 
          <div className="elema konst" id="idelema0"> 
            <div className="elemtext">Имя</div>
          <input type="text" name="elemnamea0" className="dr"/>
          </div>

          <div className="elema konst" id="idelema1"> 
            <div className="elemtext">Телефон</div>
            <input type="text" name="elemnamea1" className="dr"/>
          </div>
          <input className="drr" type="submit" name="dfotpr" value="Отправить"/>
          <div className="avtorc">
            <a href="https://blogjquery.ru/" target="_blank" title="Программирование на jQuery, PHP, Joomla и WordPress">blogjquery.ru</a>
          </div>
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
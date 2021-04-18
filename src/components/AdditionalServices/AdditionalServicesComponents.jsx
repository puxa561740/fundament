import { useContext } from "react";
import {ModalOnOfContext} from '../../ModalContext/ModalContext';

const AdditionalServicesComponents = (props)=>{

  const modalOnOf = useContext(ModalOnOfContext);

  return (<>
    <div className='additionalServicesComponents'>
      <div className='additionalServicesComponents__header'><p>{props.name}</p></div>
      <div className='additionalServicesComponents__budy' style={{background: `url(${props.picture}) 100% center / cover no-repeat`}}></div>
      <button className='additionalServicesComponents__btn' onClick={modalOnOf}>Заказать</button>
    </div>
  </>)
};

export default AdditionalServicesComponents;


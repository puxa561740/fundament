import { useContext } from 'react';
import styled from 'styled-components';
import headerimg1 from '../../assets/headerImg1.jpg';
import HeaderCard from '../HeaderCards/HeaderCard';
import {ModalOnOfContext} from '../../ModalContext/ModalContext';

const HeaderBaner = ({itemsCard})=>{

  const modalOnOf = useContext(ModalOnOfContext);

  return (<>
    <S.Section className='headerBanerContainer'>
      <div className='headerBanerIn'>
        <h3>Работаем по всей Беларуси</h3>
        <h1>Фундамент на винтовых сваях <br/> любой сложности <span>Всего за 1-2 дня!</span></h1>
        <h3>Без предоплаты</h3>
        <div className='cardContainer' >
          {itemsCard.map((item, index)=>{
            return <HeaderCard srcImg={item.urlImg} text={item.cardText} key={index*15} />
          })}
        </div>
        <h5>Хотите узнать сколько будет стоить Ваш? Закажите бесплатный расчет!</h5>
        <div className='modalContainerBtn'>
          <button className='btnHederBanner' onClick={modalOnOf}>Бесплатный расчет</button>
        </div>
      </div>
    </S.Section>
  </>)
};

export default HeaderBaner;

const S = {
  Section: styled.section`    
    background: url(${headerimg1}) 100% bottom/ cover no-repeat;
    
  `
}
import styled from 'styled-components';
import bath from '../../assets/forImg/bath.jpg';
import home from '../../assets/forImg/home.jpg';
import garage from '../../assets/forImg/garage.webp';
import pier from '../../assets/forImg/pier.jpg';
import greenhouse from '../../assets/forImg/greenhouse.jpg';
import gazebos from '../../assets/forImg/gazebos.jpg';
import canopy from '../../assets/forImg/canopy.jpg';
import terraces from '../../assets/forImg/terraces.jpg';
import annexes from '../../assets/forImg/annexes.jpg';
import verandas from '../../assets/forImg/verandas.jpg';
import fence from '../../assets/forImg/fence.jpg';
import bridge from '../../assets/forImg/bridge.jpg';
import ProductItem from './ProductItem';
import {ModalOnOfContext} from '../../ModalContext/ModalContext';
import { useContext } from 'react';

const Product = ()=>{

  const productPresentationItem = [
    {
      itemImg: home,
      itemText: 'Дома', 
      imagesTxt:'home',
    },
    {
      itemImg: bath,
      itemText: 'Бани', 
      imagesTxt:'bath',
    },
    {
      itemImg: garage,
      itemText: 'Гаража', 
      imagesTxt:'garage',
    },
    {
      itemImg: pier,
      itemText: 'Пирса', 
      imagesTxt:'pier',
    },
    {
      itemImg: greenhouse,
      itemText: 'Теплицы', 
      imagesTxt:'greenhouse',
    },
    {
      itemImg: gazebos,
      itemText: 'Беседки', 
      imagesTxt:'gazebos',
    },
    {
      itemImg: canopy,
      itemText: 'Навеса', 
      imagesTxt:'canopy',
    },
    {
      itemImg: terraces,
      itemText: 'Терассы', 
      imagesTxt:'terraces',
    },
    {
      itemImg: annexes,
      itemText: 'Пристройки', 
      imagesTxt:'annexes',
    },
    {
      itemImg: verandas,
      itemText: 'Веранды', 
      imagesTxt:'verandas',
    },
    {
      itemImg: fence,
      itemText: 'Забора', 
      imagesTxt:'fence',
    },
    {
      itemImg: bridge,
      itemText: 'Мостика', 
      imagesTxt:'bridge',
    },
  ];
  const modalOnOf = useContext(ModalOnOfContext);

  return (<>
    <S.Section className='product'>
      <div className='productTitle'>
        <h1>СВАЙНО-ВИНТОВОЙ ФУНДАМЕНТ</h1>
        <p>ЛУЧШЕЕ РЕШЕНИЕ ДЛЯ:</p>
      </div>
      <div className='productContainer'>
        {productPresentationItem.map((item, key)=>{
          return <ProductItem itemImg={item.itemImg} itemText={item.itemText} imagesTxt={item.imagesTxt} key={key*15}/>
        })}
      </div>
      <div>
        <div className='product__Btn_Cont'>
          <button onClick={modalOnOf}>Получить консультацию</button>
        </div>
      </div>
      
    </S.Section>
  </>)
};

export default Product;

const S = {
  Section: styled.section`
    
  `
};
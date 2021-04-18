import styled from 'styled-components';
import background from '../../assets/saunas/background.jpg';
import bathsMadeOfBricks from '../../assets/saunas/baths made of bricks.jpg';
import bathsFromPgs from '../../assets/saunas/baths from pgs.jpg';
import bathsInsulation from '../../assets/saunas/baths insulation.jpg';
import saunaStoves from '../../assets/saunas/sauna stoves.jpg';
import interiorDecorationOfTheBath from '../../assets/saunas/interior decoration of the bath.jpg';
import ProductItem from '../Product/ProductItem';
import HeaderCard from '../HeaderCards/HeaderCard';
import {ModalOnOfContext} from '../../ModalContext/ModalContext';
import { useContext } from 'react';

const TurnkeySaunas = ({itemsCard})=>{

  const productPresentationItem = [
    {
      itemImg: bathsMadeOfBricks,
      itemText: 'Бани из кирпича', 
      imagesTxt:'baths made of bricks',
    },
    {
      itemImg: bathsFromPgs,
      itemText: 'Бани из ПГС', 
      imagesTxt:'baths from pgs',
    },
    {
      itemImg: bathsInsulation,
      itemText: 'Утепление бань', 
      imagesTxt:'baths insulation',
    },
    {
      itemImg: saunaStoves,
      itemText: 'Печи каменки', 
      imagesTxt:'sauna stoves',
    },
    {
      itemImg: interiorDecorationOfTheBath,
      itemText: 'Внутренняя отделка', 
      imagesTxt:'interior decoration of the bath',
    },
  ];

  const modalOnOf = useContext(ModalOnOfContext);

  return (<>
      <S.Section1 className='headerBanerContainer'>
        <div className='headerBanerIn'>
            <h1>Строительство бань по Гомелю и области</h1>
            <h2>Под ключ</h2>
            <h2>Без предоплаты</h2>
            <div className='cardContainer' >
              {itemsCard.map((item, index)=>{
              return <HeaderCard srcImg={item.urlImg} text={item.cardText} key={index*12} />
              })}
            </div>
            <button className='btnHederBanner' onClick={modalOnOf}>Связаться</button>
          </div>
      </S.Section1>
      
      <S.Section2 className='product'>
      <div className='productTitle'>
        <p>Мы делаем:</p>
      </div>
      <div className='productContainer'>
        {productPresentationItem.map((item, key)=>{
          return <ProductItem itemImg={item.itemImg} itemText={item.itemText} imagesTxt={item.imagesTxt} key={key*11}/>
        })}
      </div>
      <div className='product__Btn_Cont' onClick={modalOnOf}>
        <button>Получить консультацию</button>
      </div>
    </S.Section2>
  </>)
};

export default TurnkeySaunas;

const S = {
  Section1: styled.section`
    background: url(${background}) 50% 50%/ cover no-repeat;
    
  `,
  Section2: styled.section`
  
  `
}
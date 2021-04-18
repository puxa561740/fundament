import styled from 'styled-components';
import headerImg from '../../assets/headerImg2.jpg';
import HeaderCard from '../HeaderCards/HeaderCard';
import singlerRoof from '../../assets/ROOF/SINGLE ROOF.jpg';
import gableRoof from '../../assets/ROOF/gable roof.jpg';
import pitchedRoof from '../../assets/ROOF/pitched roof.jpg';
import reconstructionRoof from '../../assets/ROOF/reconstruction roof.jpg';
import dismantlingOfRoofs from '../../assets/ROOF/dismantling of roofs.jpg';
import ProductItem from '../Product/ProductItem';
import {ModalOnOfContext} from '../../ModalContext/ModalContext';
import { useContext } from 'react';

const Roofing = ({itemsCard})=>{

  const productPresentationItem = [
    {
      itemImg: singlerRoof,
      itemText: 'Односкатная кровля', 
      imagesTxt:'singler roof',
    },
    {
      itemImg: gableRoof,
      itemText: 'Двухскатная кровля', 
      imagesTxt:'singler roof',
    },
    {
      itemImg: pitchedRoof,
      itemText: 'Многоскатная кровля', 
      imagesTxt:'singler roof',
    },
  ];

  const dopProductPresentationItem =[
    {
      itemImg: reconstructionRoof,
      itemText: 'Реконструкция', 
      imagesTxt:'singler roof',
    },
    {
      itemImg: dismantlingOfRoofs,
      itemText: 'Демонтаж', 
      imagesTxt:'singler roof',
    },
  ];
  

  const modalOnOf = useContext(ModalOnOfContext);

  return (<>
  <S.Section1 className='headerBanerContainer'>
    <div className='headerBanerIn'>
        <h1>Кровельные работы по Гомелю и области</h1>
        <h2>Под ключ</h2>
        <h2>Без предоплаты</h2>
        <div className='cardContainer' >
          {itemsCard.map((item, index)=>{
            return <HeaderCard srcImg={item.urlImg} text={item.cardText} key={index*14} />
          })}
        </div>
        <button className='btnHederBanner' onClick={modalOnOf}>Связаться</button>
      </div>
  </S.Section1>
  
  <S.Section2 className='product'>
    <div className='productTitle'>
        <p>ПРОИЗВОДИМ МОНТАЖ РАЗЛИЧНЫХ ВИДОВ КРОВЛИ:</p>
    </div>
    <div className='productContainer'>
      {productPresentationItem.map((item, key)=>{
        return <ProductItem itemImg={item.itemImg} itemText={item.itemText} imagesTxt={item.imagesTxt} key={key*13}/>
      })}
    </div>
    <div className='dopProductTitle'>
      <p>А так же:</p>
    </div>
    <div className='dopProductContainer'>
    {dopProductPresentationItem.map((item, key)=>{
        return <ProductItem itemImg={item.itemImg} itemText={item.itemText} imagesTxt={item.imagesTxt} key={key*21}/>
      })}
    </div>
    <div className='product__Btn_Cont'>
      <button onClick={modalOnOf}>Получить консультацию</button>
    </div>
    </S.Section2>
  </>)
};

export default Roofing;

const S = {
  Section1: styled.section`
    background: url(${headerImg}) 100% bottom/ cover no-repeat;
    
  `,
  Section2: styled.section`
  
   `
}
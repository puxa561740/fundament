import styled from 'styled-components';

const ProductItem = ({itemImg, itemText, imagesTxt})=>{

  return (<>
    <S.Wrapper className='productItemContainerImg'>
        <img src={itemImg} alt={'images ' + imagesTxt}/>
        <span className='name'>{itemText}</span>
    </S.Wrapper>
  </>)
};

export default ProductItem;

const S = {
  Wrapper: styled.div`
  
  `
}
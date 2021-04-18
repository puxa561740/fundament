import styled from 'styled-components';

const HeaderCard = ({srcImg, text})=>{
  return (<>
    <S.Wrapper className='headCard'>
      <div className='headCardImgBlock'>
        <img src={srcImg} alt="headCardImg" className='headCardImg'/>
      </div>
      <div className='headCardText'>
        <span>{text}</span>
      </div>
    </S.Wrapper>
  </>)
};

export default HeaderCard;

const S = {
  Wrapper: styled.div`
    text-align: center;
    width: 180px;
    margin: 10px;
    .headCardImgBlock {
      height: 60px;
      text-align: center;
      margin: 0 auto;
    }
    div > img{
      height: 40px;
      background-color: rgba(255, 255, 255, .7) ;
    }
    div {
      position: relative;
    }
    .headCardText {
      span {
        font-size: 1.1rem;
      }
    }
    .headCardText::before {
    content: ' ';
    position: absolute;
    width: 100px;
    height: 4px;
    top: -10px;
    left: 0;
    background: #ff1818;
}
  `
}
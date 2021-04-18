import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainPage = ({listOfServices})=>{

  return(<>
    <S.Wrapper>
      <nav className='mainPageBlock1'>
        <ul className='mainPageBlock1Section'>
          {listOfServices.map((item, index)=>{
            return (<li className='mainPageBlock1Section1Button' key={index*17}><NavLink to={item.link}><h4>{item.heading}</h4></NavLink></li>)
          })}
        </ul>
      </nav>
    </S.Wrapper>
  </>)
};

export default MainPage;

const S = {
  Wrapper: styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  .mainPageBlock1, .mainPageBlock2 {
    display: flex;
    justify-content: center;
    width: 100%;
    > p {
      margin: 0;
      padding: 0;
      font-size: 2rem;
      font-weight: 800;
    }
    a > h4 {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
      color: black;
      padding: 5px 5px;
    }
  }
  
  .mainPageBlock1Section1Button:hover, .mainPageBlock2Section1Button:hover {
    background-color: #7A726E;
    a {
      h4 {
        color: #fff;
      }
    }
  }
  
  `
}
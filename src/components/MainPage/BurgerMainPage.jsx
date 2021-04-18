import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HeaderNavKontakt from '../HeaderNav/headerNavKontakt';

const BurgerMainPage =({header,
  listOfServices,
  burgerActive,
  setBurgerActive
})=>{

  return(<>
    <S.Wrapper className={burgerActive ? 'burgerMenu activeBurgerMenu' : 'burgerMenu'} onClick={()=>setBurgerActive(false)}>
      <div className='blur'/>
      <div className='burgerMenu__content' onClick={e=>e.stopPropagation()}>
        <div className='burgerMenu__header'>
          {header}
        </div>
        <ul className='mainPageBlock1Section'>
        {listOfServices.map((item, index)=>{
            return (<li className='mainPageBlock1Section1Button' key={index*16} onClick={()=>setBurgerActive(false)}><NavLink to={item.link}><h4>{item.heading}</h4></NavLink></li>)
          })}
        </ul>
        <HeaderNavKontakt/>
      </div>
    </S.Wrapper>
  </>)
};

export default BurgerMainPage;

const S = {
  Wrapper: styled.div`
    .blur {
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(2px);
      position: absolute;
      left:30vw;
      @media(max-width: 750px) {
        left: 70vw;
      }
    }
    .burgerMenu__content {
      width: 100%;
      height: 100%;
      background-color: black;
      display:flex;
      flex-direction:column;
      align-items: center;
      transition: all 0.6s;
      .burgerMenu__header {
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
        border-bottom: 1px solid #fff;
        margin-bottom: 20px;
      }

      .mainPageBlock1Section {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        .mainPageBlock1Section1Button {
          border-radius: 10px;
          border: 2px solid #fff;
          margin: 10px 0;
          display: flex;
          align-items: center;
          :hover {
            background-color: #fff;
            h4 {
              color: #000;
            }
          }
          h4 {
            padding: 2px 5px;
            margin: 0;
            color: #fff;
          }
        }
      }
      
    }
    
  `
}
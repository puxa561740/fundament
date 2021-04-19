import styled from 'styled-components';
import MainPage from '../MainPage/MainPage';
import { useState } from 'react';
import BurgerMainPage from '../MainPage/BurgerMainPage';
import HeaderNavKontakt from './headerNavKontakt';

const HeaderNav =()=>{
  const [burgerActive, setBurgerActive] = useState(false);
  const services = [{
    link: '/',
    heading: 'Фундамент',
  }, {
    link: '/roofing',
    heading: 'Кровельные работы',
  }, {
    link: '/turnkeysaunas',
    heading: 'Бани под ключ',
  }];

  return(<>
  <S.Burger>
      <nav>
        <div className='burgerBtn' onClick={()=>setBurgerActive(!burgerActive)}>
          <span/>
        </div>
      </nav>
    </S.Burger>
    <S.Header className="header">
        <nav className="header-nav">
          <MainPage listOfServices={services} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
          <HeaderNavKontakt/>
        </nav>
    </S.Header>
    <BurgerMainPage header='Наши услуги:' listOfServices={services} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
  </>)
};

export default HeaderNav;

const S = {
  Header: styled.header`
    
  `,
  Burger: styled.header`
  position: sticky;
  top: 0;
  display: none;
  z-index: 50;
  @media(max-width: 900px) {
    display: block;
  }
  
  nav {
    height: 50px;
    width:100%;
    background-color: #fff;
    position: sticky;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    left: 1px;
    .burgerBtn {
      height: 30px;
      width: 50px;
      position: relative;
      background-color: #fff;
      cursor: pointer;
      span {
        content: '';
        position: absolute;
        top: 13px;
        width: 100%;
        background-color: black;
        height: 5px;
      }
      ::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        background-color: black;
        height: 5px;
      }
      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: black;
        height: 5px;
      }
    }
    .burgerBtn:hover {
      ::before, ::after {
        transition: all 0.2s;
        width: 70%;
      }
    }
  }
`
};
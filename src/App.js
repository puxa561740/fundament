import './styles/styles.scss';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer/Footer';
import Fundament from './components/Fundament/Fundament';
import TurnkeySaunas from './components/TurnkeySaunas/TurnkeySaunas';
import Roofing from './components/Roofing/RoffingHeaderBaner';
import cardImg1 from './assets/icons/protection-shield-with-a-check-mark.png';
import cardImg2 from './assets/icons/noun_success_2320782.svg';
import cardImg3 from './assets/icons/noun_seasons_3777488.svg';
import cardImg4 from './assets/icons/noun_Shovel_3152916.svg';
import cardImg5 from './assets/icons/noun_Best price_3328523.svg';
import cardImg6 from './assets/icons/noun_Calendar_3824152.svg';
import cardImg7 from './assets/icons/noun_Crane_2832779.svg';
import cardImg8 from './assets/icons/noun_warranty_2479449.svg';
import AdditionalServices from './components/AdditionalServices/AdditionalServices';
import Modal from './components/Modal/Modal';
import { useContext } from "react";
import {ModalContext} from './ModalContext/ModalContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
const { Switch, Route, Redirect} = require("react-router-dom");



function App() {

  const fundamentItemsCard = [{
    urlImg: cardImg1,
    cardText:'Гарантия качества',
  },
  {
    urlImg: cardImg2,
    cardText:'Лучшее решение для уклона, обрыва',
  },
  {
    urlImg: cardImg3,
    cardText:'Возможность монтажа в любое время года',
  },
  {
    urlImg: cardImg4,
    cardText:'Не требует подготовки, земляных работ',
  },
  {
    urlImg: cardImg5,
    cardText:'Лучшая цена в РБ',
  },
  {
    urlImg: cardImg6,
    cardText:'Монтаж фундамента любой сложности',
  },
  {
    urlImg: cardImg7,
    cardText:'Монтаж техникой',
  },
  {
    urlImg: cardImg8,
    cardText:'Гарантия от 10 лет',
  },
];

const roofingItemCard = [{
  urlImg: cardImg1,
  cardText:'Гарантия качества',
},
{
  urlImg: cardImg5,
  cardText:'Лучшая цена в РБ',
},
{
  urlImg: cardImg8,
  cardText:'Гарантия от ??? лет',
},
];

const [modal] = useContext(ModalContext);

  return (<>
    <main>
      <HeaderNav/>
      <ScrollToTop>
        <Switch>
          <Route exact path='/fundament' render={()=><Fundament itemsCard={fundamentItemsCard}/>}/>
          <Route path='/roofing' render={()=><Roofing itemsCard={roofingItemCard}/>}/>
          <Route path='/turnkeysaunas' render={()=><TurnkeySaunas itemsCard={roofingItemCard}/>}/>
          <Redirect from='*' to='/fundament'/>
        </Switch>
      </ScrollToTop>
      <AdditionalServices/>
      <Footer/>
      <Modal/>
    </main>
    
  </>)
};

export default App;
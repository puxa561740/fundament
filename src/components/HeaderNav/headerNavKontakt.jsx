import viber from '../../assets/VIBER-LOGO.png';
import velcom from '../../assets/logoVelcom.jpg';

const HeaderNavKontakt = ()=>{
  
  return(<>
    <div className='headerNavKontakt'>
      <h3>Контакты</h3>
      <div className='headerTel'>
        <img src={velcom} alt='velcom logo' className='header-velcom-logo'/>
        <a href='tel: +375296640846' className='tel'>(29) 664 08 46</a>
        <img src={viber} alt='viber logo' className='header-viber-logo'/>
      </div>
      <div className='headerTel'>
        <img src={velcom} alt='velcom logo' className='header-velcom-logo'/>
        <a href='tel: +375293288732' className='tel'>(29) 328 87 32</a>
        <img src={viber} alt='viber logo' className='header-viber-logo'/>
      </div>
    </div>
  </>)
};

export default HeaderNavKontakt;
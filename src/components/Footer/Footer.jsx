import HeaderNavKontakt from "../HeaderNav/headerNavKontakt"

const Footer = ()=>{
  return (<>
  <footer className='footer'>
    <HeaderNavKontakt/>
    <a href='mailTo:fundamentgomel@gmail.com' className='footer__mail'>fundamentgomel@gmail.com</a>
  </footer>
  </>)
};

export default Footer;
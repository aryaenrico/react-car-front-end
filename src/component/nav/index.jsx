import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Style from './nav.module.css';

function NavbarCreate(){
      const brand = `${Style['btn-logo']} ${Style['btn-border']}`
      const NavFont =`mx-2 mt-3 ${Style['nav-font']}`;
      const ButtonRegister =`${Style['btn-register']} ${Style['btn-border']}`
      const NavFontRegister =`mx-2 mt-2 ${Style['nav-font']}`;
     return (<>
            <Navbar className={Style.background}>
              <Container>
                <Navbar.Brand href="#home">
                  <Button className={brand}>&nbsp;&nbsp;</Button>
                </Navbar.Brand>
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={NavFont}>Our Service</Nav.Link>
                  <Nav.Link href="#features"className={NavFont} >Why Us</Nav.Link>
                  <Nav.Link href="#pricing" className={NavFont}>Testimonial</Nav.Link>
                  <Nav.Link href="#pricing" className={NavFont} >Faq</Nav.Link>
                  <Nav.Link href="#pricing" className={NavFontRegister}><Button className={ButtonRegister}>Register oy</Button></Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>);
}
export { NavbarCreate}

import Style from './header.module.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Image from './img_car.png'
import { Link } from "react-router-dom";
function Header (){
  const Header =`${Style['background']} ${Style['section-header']} pt-3`
  const H2Style =`${Style['banner-text']} `
  const P = `${Style['font']} ` 
  const ButtonSewa = `${Style['btn-border']} ${Style['btn-mulai-sewa']} ${Style['font']}`
  return (
        <div className={Header}>
          <Container fluid>
            <Row className='justify-content-around'>
              <Col xs={12} md={7} className=' d-flex banner justify-content-lg-center'>
              <article>
                <h2 className={H2Style}>Sewa & Rental Mobil Terbaik di <br/>
                Kawasan (Lokasimu)</h2>
                <p className={P}>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan harga
                terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to='/cari-mobil'>
              <Button type="button" className={ButtonSewa} id="btn-mulai-sewa-mobil">Mulai Sewa Mobil2</Button>
              </Link>
             
              </article>
              </Col>
              <Col xs={12} md={5} className='align-items-end flex-column mt-4'>
                <div className={Style['gambar']}>
                <img src={Image} alt="gambar mobil" className={Style['ukuran_gambar']}/>
                </div>
              </Col>

            </Row>

          </Container>

        </div>
            
   

      );
          
}
export {Header}
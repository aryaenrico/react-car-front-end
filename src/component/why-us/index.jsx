import Style from "./why-us.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CompletedIcon from './img/icon_complete.png';
import PriceIcon from './img/icon_price.png';
import ProfessionalIcon from './img/icon_professional.png';
import HoursIcon from './img/icon_24hrs.png';


function WhyUs() {
  return (
    <section className={Style['why-us']}>
      <Container>
        <h2>Why us ?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </Container>
      <Container >
        <Row className="d-flex justify-content-around">
          <Col sm={6} xl={3} className={Style["card-why-us"]}>
            <Card >
            <div className={Style['card-body']}>
            <img src={CompletedIcon} alt="logo"/>
                <h6>Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat </p>
            </div>
            </Card>
          </Col>

          <Col sm={6} xl={3} className={Style["card-why-us"]}>
            <Card >
            <div className={Style['card-body']}>
            <img src={PriceIcon} alt="logo"/>
                <h6>Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat </p>
            </div>
            </Card>
          </Col>

          <Col sm={6} xl={3} className={Style['card-why-us']}>
            <Card >
            <div className={Style['card-body']}>
            <img src={ProfessionalIcon} alt="logo"/>
                <h6>Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat </p>
            </div>
            </Card>
          </Col>

          <Col sm={6} xl={3} className={Style['card-why-us']}>
            <Card >
            <div className={Style['card-body']}>
            <img src={HoursIcon} alt="logo"/>
                <h6>Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat </p>
            </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );

  
}

export{WhyUs}

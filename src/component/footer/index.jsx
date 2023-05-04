import Style from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Twiter from "./icon_twitter.png";
import Facebook from "./icon_facebook.png";
import Email from "./icon_mail.png";
import Instagram from "./icon_instagram.png";

function Footer() {
  const StyleButton = `${Style["btn-footer"]}  ${Style["btn-border"]}`;
  return (
    <footer>
      <Container className={Style["section-footer"]}>
        <Row>
          <Col md={8} lg={4}>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>

          <Col md={4} lg={2} className={Style["footer-bold"]}>
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </Col>
          <Col md={8} lg={4}>
            <p>Connect with us</p>
            <div class="d-flex ">
              <img src={Facebook} alt="facebook" className={Style['footer-img']} />
              <img src={Instagram} alt="instagram" className={Style['footer-img']}  />
              <img src={Twiter} alt="twitter" className={Style['footer-img']}  />
              <img src={Twiter} alt="email" className={Style['footer-img']}  />
              <img src={Email} alt="twitch" className={Style['footer-img']}  />
            </div>
          </Col>

          <Col md={4} lg={2} className={Style["copy-right-footer"]}>
            <p>Copyright Binar 2022</p>
            <button className={StyleButton}>&nbsp;</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export { Footer };

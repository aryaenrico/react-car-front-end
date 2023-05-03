import Image from "./img_service.png";
import Image_Done from "./Group_53.png";
import Style from "./our-section.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurService() {
  const InfoSection = `${Style["section-info"]} mt-sm-4`;
  const ListInfo =`${Style["section-info-2"]}  d-flex flex-column `
  return (
    <Container fluid className={Style["our-section"]}>
      <Row className="justify-content-center">
        <Col lg={6} className="text-center">
          <img src={Image} alt="service" className={Style["image-service"]} />
        </Col>

        <Col lg={4} className={InfoSection}>
          <h2>
            Best Car Rental for any kind of trip in <br /> (Lokasimu)!
          </h2>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih <br /> murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas
            <br />
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>

          <div className={ListInfo}>
              <div>
                <img src={Image_Done} alt="selector"/>
                <p >Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </div>
              <div>
                <img  src={Image_Done} alt="selector"/>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam </p>
              </div>
              <div>
                <img  src={Image_Done} alt="selector"/>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </div>
              <div>
                <img  src={Image_Done} alt="selector"/>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </div>
              <div>
                <img src={Image_Done} alt="selector"/>
                <p>Layanan Airport Transfer / Drop In Out</p>
              </div>


            </div>
        </Col>
      </Row>
    </Container>
  );
}

export { OurService };

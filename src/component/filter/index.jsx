import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Style from "./filter.module.css";
import { NavbarCreate } from "../nav";
import { Header } from "../header";
import { Footer } from "../footer";
import { FilterCar } from "../listData";

function Filter() {
  const ButtonStyle = `${Style["btn-border"]} ${Style["btn-car-filter"]} ${Style["btn-second"]}`;
  return (
    <>
      <NavbarCreate />
      <Header />
      <section>
        <Container className={Style["cars-filter"]}>
          <Row>
            <Col md={3} className={Style["cars-background"]}>
              <p className={Style["select-title"]}>Tipe Driver</p>

              <Form.Select>
                <option value="lepas kunci" selected>
                  Lepas Kunci
                </option>
                <option value="dengan supir">Dengan Supir</option>
              </Form.Select>
            </Col>

            <Col md={2} className={Style["cars-background"]}>
              <p className={Style["select-title"]}>Tanggal</p>
              <Form.Control type="date" placeholder="name@example.com" />
            </Col>

            <Col md={2} className={Style["cars-background"]}>
              <p className={Style["select-title"]}>Waktu jemput /Ambil</p>
              <Form.Control type="time" value={"10:00"} />
            </Col>

            <Col md={3} className={Style["cars-background"]}>
              <p className={Style["select-title"]}>
                Jumlah Penumpang (Optional)
              </p>
              <Form.Control type="number" min={2} />
            </Col>

            <Col md={2} className={Style["cars-background"]}>
              <Button className={ButtonStyle}>Cari Mobil</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <FilterCar/>
      <Footer />
    </>
  );
}

export { Filter };

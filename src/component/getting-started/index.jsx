import Container from "react-bootstrap/Container";
import Style from "./getting-started.module.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
function GettingStarted(params) {
  return (
    <Container className={Style["getting-started"]}>
      <Row>
        <div className="justify-content-center text-center">
          <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Button>Mulai Sewa Mobil</Button>
        </div>
      </Row>
    </Container>
  );
}

export { GettingStarted };

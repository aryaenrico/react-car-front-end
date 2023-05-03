import Carousel from "react-bootstrap/Carousel";
import Style from "./testimonial-content.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "./img_photo_2.png";
import Rate from "./Rate.png";
import Container from "react-bootstrap/Container";

function TestimonialContent() {
  const wrapperTestimonial = `${Style["card-testimonial"]} ${Style["section-card"]}`;
  return (
    <section className={Style["testimonial-content"]}>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Col md={7} lg={9} className={wrapperTestimonial}>
              <div className={Style["card-body-testimonial"]}>
                <div className={Style["img-container"]}>
                  <img
                    src={Image}
                    alt="testimonial-photo"
                    className={Style["img-testimonial"]}
                  />
                </div>
                <div className={Style['"testimonial-content-card']}>
                  <div className="star ">
                    <img src={Rate} alt="" />
                  </div>

                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum <br /> dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum{" "}
                    <br /> dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod”
                  </p>
                  <p>John Dee 32, Bromo</p>
                </div>
              </div>
            </Col>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card>
            <Col md={7} lg={9} className={wrapperTestimonial}>
              <div className={Style["card-body-testimonial"]}>
                <div className={Style["img-container"]}>
                  <img
                    src={Image}
                    alt="testimonial-photo"
                    className={Style["img-testimonial"]}
                  />
                </div>
                <div className={Style['"testimonial-content-card']}>
                  <div className="star ">
                    <img src={Rate} alt="" />
                  </div>

                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum <br /> dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum{" "}
                    <br /> dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod”
                  </p>
                  <p>John Dee 32, Bromo</p>
                </div>
              </div>
            </Col>
          </Card>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export { TestimonialContent };

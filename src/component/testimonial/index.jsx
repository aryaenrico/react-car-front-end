import Style from "./testimonial.module.css";


function Testimonial(){
      return (
      <section className={Style['testimonial-heading']}>
      <h2 className="text-center">Testimonial</h2>
       <p className="text-center">
              Berbagai review positif dari para pelanggan kami
      </p>
      </section>

     
      );
}



export {Testimonial}
import React from "react";
import "./Main.css";

import restaurantImage from "./assets/infobox-right.jpg";
import greekSalad from "./assets/greeksalad.jpg";
//import bruchetta from "./assets/bruschetta.jpg";
import lemonDessert from "./assets/lemon dessert.jpg";
import bruchetta from "./assets/Bruschetta-Recipe-SpendWithPennies-2-500x500.jpeg";
import star from "./assets/star.webp";
import { register } from "swiper/element/bundle";
import founders from "./assets/Mario and Adrian A.jpg";
// Import Swiper React components

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

register();

function Main() {
  return (
    <main>
      <section className="info-box">
        <div className="info-box-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean
            <br />
            restaurant, focused on traditional recipes served
            <br />
            with a modern twist.
          </p>
          <button className="button">Reserve a Table</button>
        </div>
        <div className="info-box-right">
          <img src={restaurantImage} alt="" />
        </div>
      </section>

      <section className="menu">
        <div className="menu-top">
          <h1>This weeks specials!</h1>
          <button className="button">Online Menu</button>
        </div>
        <div className="menu-specials">
          <div class="row" id="table">
            <div class="pic">
              <img src={greekSalad} alt="ALT" />
              <div className="card-header">
                <p>Greek salad</p>
                <p>$12.99</p>
              </div>
              <div className="card-description">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives, and
                  our chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons
                </p>
              </div>
              <div className="card-footer">
                <p>Order a delivery</p>
              </div>
            </div>
            <div className="pic">
              <img src={bruchetta} alt="ALT/" />
              <div className="card-header">
                <p>Bruchetta {"   "}</p>
                <p>$5.99</p>
              </div>
              <div className="card-description">
                <p>
                  Our Bruschetta is made from homemade grilled bread that has
                  been smeared with garlic and seasoned with salt and olive oil.
                  Topped with fresh vegetables.
                </p>
              </div>
              <div className="card-footer">
                <p>Order a delivery</p>
              </div>
            </div>
            <div class="pic">
              <img src={lemonDessert} alt="ALT" />
              <div className="card-header">
                <p>Lemon Cake</p>
                <p>$5.00</p>
              </div>
              <div className="card-description">
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
              </div>
              <div className="card-footer">
                <p>Order a delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>Testimonials</h1>

        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonials-swiper"
        >
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={star} alt="" />
              <h4>
                "Wonderful, beautiful, super tasty, and all natural sweets.
                Highly recommend Little <br /> lemon restaurant!""
              </h4>
              <p>- John Smith</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={star} alt="" />
              <h4>
                "Everyone went crazy over them! They also couldn't believe how
                how beautiful they were. <br /> Totally impressed!"
              </h4>
              <p>- Kevin Nguyen</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img src={star} alt="" />
              <h4>
                "Best pasta ever! Got them for a coworker party and they were a
                hit! Definitely <br /> coming back here!"
              </h4>
              <p>- Elon Musk</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-box">
        <div className="about-box-left">
          <h1>About Us</h1>
          <p>
            Little Lemon opened in 1995 by two Italian brothers,
            <br /> Adrian and Mario. Despite the city's diversity, the <br />
            two brothers recognized the lack of Mediterranean <br />
            cuisine in Chicago, and were inspired to bring the <br />
            flavors of their hometown in Italy to the people of
            <br /> Chicago. The two brothers continue to oversee the
            <br /> Little Lemon restaurant, nearly thirty years later.
          </p>
        </div>
        <div className="about-box-right">
          <img src={founders} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Main;

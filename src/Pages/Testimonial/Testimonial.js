import { dblClick } from "@testing-library/user-event/dist/click";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {" "}
          <TestimonialCard></TestimonialCard>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div
            className=""
            style={{
              backgroundImage:
                "url(https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/dynamic-header-121.jpg ",
              backgroundSize: "cover",
              width: "100%",
              height: "50vh",
            }}
          >
            <Carousel>
              <Carousel.Item interval={2000}>
                <div className="text-center">
                  <img
                    style={{ width: "15%" }}
                    className="rounded-circle"
                    src="https://i.ibb.co/5L8nZKc/review-3.png"
                    alt="First slide"
                  />
                </div>
                <blockquote style={{ "font-size": "1vw" }} className="detail">
                  "I've been using this car since last year I'll divide my
                  review between the pros and cons Pros:- Good power High-speed
                  Good road presence, Smooth acceleration, Good braking, Can fit
                  6 people if they scooch a little. "
                  <div
                    style={{ height: "1px", "margin-top": "5%" }}
                    className="w-50 border border-secondary  bg-secondary"
                  ></div>
                  <div>
                    <h1 className="name">John Smith</h1>
                  </div>
                </blockquote>
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <div className="text-center">
                  <img
                    style={{ width: "15%" }}
                    className="rounded-circle w-15"
                    src="https://i.ibb.co/g9QVPjh/review-1.png"
                    alt="Second slide"
                  />
                </div>
                <blockquote style={{ "font-size": "1vw" }} className="detail">
                  "Here are the technical characteristics of the Lamborghini
                  Centenario: equipped with a 770 CV aspirated V12 engine
                  springing from 0 to 100 km/h in 2.8 seconds, the newly-born
                  Lamborghini car has been produced in a limited edition, for a
                  total of 40 models: 20 Coupés and 20 Roadsters will be
                  delivered to Lamborghini. This is the best car. My dream car"
                  <div
                    style={{ height: "1px", "margin-top": "5%" }}
                    className="w-50 border border-secondary  bg-secondary"
                  ></div>
                  <div>
                    <h1 className="name">Miss Lara</h1>
                  </div>
                </blockquote>
              </Carousel.Item>
              <Carousel.Item>
                <div className="text-center">
                  <img
                    style={{ width: "15%" }}
                    className="rounded-circle w-15"
                    src="https://i.ibb.co/yVKkNPL/review-2.png"
                    alt="Third slide"
                  />
                </div>
                <blockquote style={{ "font-size": "1vw" }} className="detail">
                  "I drove this car which was owned by my friend. When he filled
                  a full gallon, then he oned the high-performance mode and the
                  car didn't drive long enough. The styling of the car and the
                  comfort is top-notch which can not be compared by any brand."
                  <div
                    style={{ height: "1px", "margin-top": "5%" }}
                    className="w-50 border border-secondary  bg-secondary"
                  ></div>
                  <div>
                    <h1 className="name">Adam Smith</h1>
                  </div>
                </blockquote>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

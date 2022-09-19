import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHandsHelping } from "react-icons/fa";
import "./Service.css";

const Service = () => {
  return (
    <div className=" my-5">
      <div>
        <div>
          <div className="d-flex">
            <div style={{ fontSize: "3vw" }} className=" me-2">
              <FaHandsHelping />
            </div>
            <h1 style={{ fontSize: "4vw" }} className="mb-5 ">
              <span className="fw-bold">WHAT</span> CAN WE DO FOR YOU?
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 ">
          <Row>
            <Col xl={4} className="my-2">
              <img
                className="img-fluid"
                src="https://i.ibb.co/dbyccg7/rsz-3parallax21-scaled.jpg"
                alt=""
              />
              
            </Col>
            <Col xl={4} className="my-2">
              <h1>Great service is just a tap away</h1>
              <p className="p-2">
                When your car breaks down, you want competent assistance fast.
                With Motor's Mania Service, that's no problem at all. Thanks to
                our world's largest workshop network of over 15,000 authorized
                workshops in 150 countries, excellent service is just around the
                corner.
              </p>
            </Col>
            <Col xl={4} className="my-2">
              <h1>Our tech got your back</h1>

              <p className="p-2">
                Modern vehicles are equipped with advanced technology and quite
                a lot of electronics. But that complexity doesn’t slow us down
                in helping you. Since all our workshops have the latest
                diagnostic tools, covering just about all makes and vehicles.
                This reduces troubleshooting time, makes service and maintenance
                reliable and effective, and repairs inexpensive and transparent.
                And if you have an older car with less tech? Don’t worry, we
                still know how to ﬁx those, too.
              </p>
            </Col>
            <Col xl={4} className="my-2">
              <h1> Spare parts that never spare on quality</h1>

              <p className="p-2">
                We do everything we can to get your car repaired as quickly as
                possible. Except for compromising on quality. That’s why we at
                Motor's Mania Service only use high-quality spare parts. This
                way, we can always ensure no loss of manufacturer’s warranty
                coverage for your vehicle. No matter which of our worldwide
                workshops you go to.
              </p>
            </Col>

            <Col xl={4} className="my-2">
              <h1>Always up to date</h1>
              <p className="p-2">
                The future of driving is already on the road. That’s why we at
                Motor's Mania Service constantly keep our employees up to date
                with regular, future-oriented training courses. So that your
                car, whether being repaired or serviced, is always in the best
                hands – both today and tomorrow!
              </p>
            </Col>
            <Col xl={4} className="my-2">
              <h1> For everything your car needs</h1>
              <p className="p-2">
                Whatever your car issue, you can come to us and count on us to
                fix it. With the quality, technology and expertise that you and
                your car deserve. With transparent billing and fast, reliable
                service you can trust. We are committed to excellence. So that
                you are mobile again in no time and remain that way for miles to
                come. Enjoy Car Service
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Service;

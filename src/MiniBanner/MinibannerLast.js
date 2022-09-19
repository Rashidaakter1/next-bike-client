import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MinibannerLast = () => {
  return (
    <div className="my-5 container">
      <Row>
        <Col xl={4} className='my-2'>
          <img
            className="img-fluid"
            src="https://demo.templatetrend.com/prestashop/PRS373/modules/tt_bannerslider/views/img/banner1.jpg"
            alt=""
          />
        </Col>
        <Col  xl={4} className='my-2'>
          <img
            className="img-fluid"
            src="https://demo.templatetrend.com/prestashop/PRS373/modules/tt_bannerslider/views/img/banner2.jpg"
            alt=""
          />
        </Col>
        <Col  xl={4} className='my-2'>
          <img
            className="img-fluid"
            src="https://demo.templatetrend.com/prestashop/PRS373/modules/tt_bannerslider/views/img/banner3.jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default MinibannerLast;

import React from "react";
import { Col, Row } from "react-bootstrap";

const MiniBanner = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex align-items-center border-end border-3 my-2">
          <img className="m-2" src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttcategorybannerblock/views/img/categorybanner1.jpg" alt="" />
          <h3>something</h3>
        </Col>
        <Col className="d-flex align-items-center border-end border-3 my-2 ">
          <img className="m-2"src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttcategorybannerblock/views/img/categorybanner2.jpg" alt="" />
          <h3>something</h3>
        </Col>
        <Col className="d-flex align-items-center border-end border-3 my-2">
          <img className="m-2" src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttcategorybannerblock/views/img/categorybanner3.jpg" alt="" />
          <h3>something</h3>
        </Col>
        <Col className="d-flex align-items-center border-end border-3 my-2">
          <img className="m-2" src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttcategorybannerblock/views/img/categorybanner4.jpg" alt="" />
          <h3>something</h3>
        </Col>
        <Col className="d-flex align-items-center my-2">
          <img className="m-2" src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttcategorybannerblock/views/img/categorybanner5.jpg" alt="" />
          <h3>something</h3>
        </Col>
      </Row>
    </div>
  );
};

export default MiniBanner;

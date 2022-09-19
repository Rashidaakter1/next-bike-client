import React from "react";
import { Card } from "react-bootstrap";
import { MdPreview } from "react-icons/md";
const TestimonialCard = () => {
  return (
    <Card className="mb-2 ">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmV2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      />
      <Card.Body className="d-flex ">
        <div className="fs-1 me-2">
          <MdPreview />
        </div>

        <Card.Title className="fw-bold fs-1 mt-2">
          {" "}
          What Our Client's Say To Us !!!
        </Card.Title>
        <img alt="" />
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;

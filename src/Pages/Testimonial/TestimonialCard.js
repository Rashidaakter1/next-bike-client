import React from "react";
import { Card } from "react-bootstrap";
import { MdPreview } from "react-icons/md";
const TestimonialCard = () => {
  return (
    <Card className="mb-2">
      <Card.Body className="d-flex">
        <div className="fs-1 me-2">
          <MdPreview />
        </div>

        <Card.Title className="fw-bold fs-1 mt-2"> What Our Client's Say</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;

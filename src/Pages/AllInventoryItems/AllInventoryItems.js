import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const AllInventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://pure-shore-71929.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        {items.map((item) => (
          <>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllInventoryItems;

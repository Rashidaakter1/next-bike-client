import React, { useEffect, useState } from "react";
import { Button, ButtonToolbar, Card, Form } from "react-bootstrap";
import { set } from "react-hook-form";
import { AiFillCar } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const handleQuantity = (id) => {
    fetch(`https://pure-shore-71929.herokuapp.com/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  const reStockQuantity = (id) => {
    console.log(item);
    fetch(`https://pure-shore-71929.herokuapp.com/inventory/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetch(`https://pure-shore-71929.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, []);

  // }
  // const reStockQuantity =(event) => {
  //     event.preventDefault()
  //     const name=event.target.name.value
  //     const quantity =event.target.quantity.value

  //     console.log(name,quantity)
  //     const url=`https://pure-shore-71929.herokuapp.com/inventory/${item._id}`
  //     fetch(url, {
  //         method: 'PUT',
  //         body: JSON.stringify({name,quantity}),
  //         headers: {
  //             'Content-type': 'application/json; charset=UTF-8',
  //         },
  //     })
  //         .then((response) => response.json())
  //         .then((json) => console.log(json));

  // };

  return (
    <div className="container my-3 ">
      <div className="d-flex">
        <div style={{ fontSize: "3vw" }} className=" me-2">
          <AiFillCar />
        </div>
        <h1 style={{ fontSize: "4vw" }} className="mb-5 ">
          <span className="fw-bold ">Update </span> Your Stocks
        </h1>
      </div>

      <div>
        <Card className="bg-dark text-white">
          <Card.Img className="img-fluid" src={item.img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="text-center" style={{ fontSize: "4vw" }}>
              {item.name}
            </Card.Title>
            <Card.Text style={{ fontSize: "2vw" }}>
              {item.description}
            </Card.Text>
            <Card.Text style={{ fontSize: "2vw" }}>
              <span className="fw-bold">Price :</span> $ {item.price}
            </Card.Text>
            <Card.Text style={{ fontSize: "2vw" }}>
              <span className="fw-bold">Quantity : </span>
              {item.quantity}
            </Card.Text>
            <Card.Text style={{ fontSize: "2vw" }}>
              <span className="fw-bold">Supplier-Name : </span>
              {item.supplierName}
            </Card.Text>
            <div className="card-btn">
              <button
                style={{ fontSize: "2vw" }}
                variant="primary"
                className="btn btn btn-outline-light fw-bold px-4"
                onClick={() => handleQuantity(item._id)}
              >
                Delivered
              </button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <div className="d-flex my-4">
          <div style={{ fontSize: "3vw" }} className=" me-2">
            <AiFillCar />
          </div>
          <h1 style={{ fontSize: "4vw" }} className="mb-5 ">
            <span className="fw-bold ">Add </span> Your Stocks
          </h1>
        </div>

        <div className="shadow-lg  mb-5 bg-white rounded p-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-bold fs-4">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label className="fw-bold fs-4">Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" />
            </Form.Group>

            <button style={{fontSize:"1vw"}}
              type="submit"
              onClick={() => reStockQuantity(item._id)}
              className="btn btn-outline-dark  px-4"
            >
              Restock
            </button>
          </Form>
        </div>

        <div className="mt-3 text-center ">
          <button className="px-4 mb-4 btn btn-outline-dark fs-4 fw-bold">
            <div style={{ fontSize: "2vw" }} className="d-flex">
              <Link
                to="/manageInventories"
                className="text-danger text-decoration-none"
              >
                Manage Inventories
              </Link>
              <div className=" ms-2">
                <BsArrowRightCircle />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

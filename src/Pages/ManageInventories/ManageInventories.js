import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillCar } from "react-icons/ai";

import { FiDelete } from "react-icons/fi";

import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    fetch("https://nextbike-api.onrender.com/manage")
      .then((res) => res.json())
      .then((data) => setDataTable(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://nextbike-api.onrender.com/manage/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const agree = window.confirm("Are you want to delete this item?");
        if (agree) {
          const remaining = dataTable.filter((item) => item._id !== id);
          setDataTable(remaining);
        }
      });
  };

  return (
    <div className="container">
      <div className="d-flex">
        <div style={{ fontSize: "3vw" }} className=" me-2">
          <AiFillCar />
        </div>
        <h1 style={{ fontSize: "4vw" }} className="mb-5 ">
          <span className="fw-bold ">Manage </span> Your Stocks
        </h1>
      </div>

      <div>
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {dataTable.map((data) => (
            <tbody>
              <tr>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td className="text-center">
                  <button className="btn" onClick={() => handleDelete(data._id)}>
                    <FiDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div className="mt-3 text-center ">
        <button className="px-4 mb-4 btn btn-outline-dark fs-4 fw-bold">
          <div style={{ fontSize: "2vw" }} className="d-flex">
            <Link to="/addNewItem" className="text-danger text-decoration-none">
              Add New Item
            </Link>
            <div className=" ms-2">
              <BsArrowRightCircle />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ManageInventories;

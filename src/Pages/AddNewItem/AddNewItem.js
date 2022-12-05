import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiFillCar } from "react-icons/ai";

const AddNewItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://nextbike-api.onrender.com/inventory/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate("/manageInventories");
  };

  return (
    <div className="container my-3">
      <div className="d-flex">
        <div style={{ fontSize: "3vw" }} className=" me-2">
          <AiFillCar />
        </div>
        <h1 style={{ fontSize: "4vw" }} className="mb-2">
          <span className="fw-bold ">Add </span> New Items
        </h1>
      </div>

      <div className="border shadow-lg rounded p-5 mt-3 mb-4">
        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ height: "40px" }}
            placeholder="Name"
            type="text"
            className="mb-3 w-100 mx-auto rounded p-2 "
            {...register("name")}
          />
          <input
            style={{ height: "40px" }}
            placeholder="Email"
            type="email"
            value={user?.email}
            readOnly
            className="mb-3 w-100  mx-auto rounded p-2"
            {...register("email")}
          />
          <input
            style={{ height: "40px" }}
            placeholder="Price"
            type="number"
            className="mb-3 w-100  mx-auto rounded p-2"
            {...register("price")}
          />
          <input
            style={{ height: "40px" }}
            placeholder="Quantity"
            type="number"
            className="mb-3 w-100  mx-auto rounded p-2"
            {...register("quantity")}
          />
          <input
            style={{ height: "40px" }}
            placeholder="PhotoUrl"
            type="text"
            className="mb-3 w-100  mx-auto rounded p-2 "
            {...register("img")}
          />

          <input
            style={{ fontSize: "4vw" }}
            className="px-5 mx-auto my-2 btn btn-outline-dark fs-4 fw-bold"
            type="submit"
            value="Add stock"
          />
        </form>
        
      </div>
    </div>
  );
};

export default AddNewItem;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCar } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useItems from "../../Hooks/useItems";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [items, setItems] = useItems([]);
  const email = user?.email;
  console.log();
  useEffect(() => {
    const url = `https://pure-shore-71929.herokuapp.com/inventory?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  //    if(user.email === items.email){
  //        items.filter(item=> item._id === )
  //    }

  return (
    <div className="container">
      <div className="d-flex">
        <div style={{ fontSize: "3vw" }} className=" me-2">
          <AiFillCar />
        </div>
        <h1 style={{ fontSize: "4vw" }} className="mb-2 ">
          <span className="fw-bold ">What </span> You ordered items
        </h1>
      </div>
      <h4>
        Thanks for being with us ,{" "}
        <span className="fw-bold text-capitalize">{user?.displayName}</span>
      </h4>
      {items.map((item) => (
        <div key={item._id}>
          <li>{item.name}</li>
        </div>
      ))}

      <div className="mt-3 text-center ">
        <button className="px-4 mb-4 btn btn-outline-dark fs-4 fw-bold">
          <div className="d-flex">
            <Link
              to="/home"
              className="text-danger text-decoration-none"
            >
              Back to Home
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

export default MyItems;

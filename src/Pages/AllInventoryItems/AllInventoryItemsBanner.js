import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Custom from "./Custom.css";
import { BsArrowRightCircle } from "react-icons/bs";

const AllInventoryItemsBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <figure className="position-relative">
        <img
          style={{ width: "100%", height: "75vh" }}
          src="https://demo.templatetrend.com/prestashop/PRS373/img/cms/parallax.jpg"
          alt=""
        />
        <figcaption>
          <h2 style={{ "font-size": "7vw" }}>Clearance & Discount</h2>
          <h4 style={{ "font-size": "4vw" }}>
            Top quality, great selection and expert advice you can trust
          </h4>

          <div className="mt-3 text-center ">
            <button className="px-5 py-1 mb-4 btn btn-outline-light fs-4 fw-bold">
              <div style={{ fontSize: "2vw" }} className="d-flex">
                <Link
                  to="/allinventory"
                  className="text-danger text-decoration-none"
                >
                  Shop Now
                </Link>
                <div className=" ms-2">
                  <BsArrowRightCircle />
                </div>
              </div>
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default AllInventoryItemsBanner;

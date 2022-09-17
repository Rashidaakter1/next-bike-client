import React from "react";
import Custom from "./Custom.css";

const AllInventoryItemsBanner = () => {
  return (
    <div>
      <figure className="position-relative">
        <img
          style={{ width: "100%", height: "75vh" }}
          src="https://demo.templatetrend.com/prestashop/PRS373/img/cms/parallax.jpg"
          alt=""
        />
        <figcaption>
          <h2 style={{"font-size":"8vw"}} >Clearance & Discount</h2>
          <h4 className="fs-1" style={{"font-size":"8vw" ,"margin":"mx-auto"}} >Top quality, great selection and expert advice you can trust</h4>
          <button className=''>Shop Now</button>
        </figcaption>
      </figure>
    </div>
  );
};

export default AllInventoryItemsBanner;

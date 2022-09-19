import React from "react";
import { useNavigate } from "react-router-dom";
import Custom from "./Custom.css";

const AllInventoryItemsBanner = () => {

  const navigate=useNavigate()
  return (
    <div>
      <figure className="position-relative">
        <img
          style={{ width: "100%", height: "75vh" }}
          src="https://demo.templatetrend.com/prestashop/PRS373/img/cms/parallax.jpg"
          alt=""
        />
        <figcaption>
          <h2 style={{"font-size":"7vw"}} >Clearance & Discount</h2>
          <h4 className="fs-1 xl:mb-8" style={{"font-size":"5vw"}} >Top quality, great selection and expert advice you can trust</h4>
          <button onClick={()=>navigate('/allinventory')} className='border px-4 py-2'>Shop Now</button>
        </figcaption>
      </figure>
    </div>
  );
};

export default AllInventoryItemsBanner;

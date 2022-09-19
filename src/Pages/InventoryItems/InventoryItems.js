import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { AiFillCar } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Button, Card } from "react-bootstrap";

const InventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://pure-shore-71929.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 6)));
  }, []);
  const navigate = useNavigate();
  const handleInventoryId = (item) => {
    navigate(`/inventory/${item._id}`);
  };

  return (
    <div className="my-5">
      <div className="d-flex">
        <div style={{ fontSize: "3vw" }} className=" me-2">
          <AiFillCar />
        </div>
        <h1 style={{ fontSize: "4vw" }} className="mb-5 ">
          <span className="fw-bold">Grab Your Vehicle</span> That Matches Your
          Personality
        </h1>
      </div>
      <div className="">
        <div className="">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                390: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {items ? (
                items.map((item) => (
                  <SwiperSlide>
                    <Card style={{ width: "18rem" }}>
                      <img src={item.img} alt="" />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Title>
                          Price : $<span className="">{item.price}</span>
                        </Card.Title>

                        <div  className="">
                          <button
                            className="btn btn-outline-dark "
                            onClick={() => handleInventoryId(item)}
                          >
                            Check Now
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))
              ) : (
                <Loading></Loading>
              )}
            </Swiper>
          </>

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
    </div>
  );
};

export default InventoryItems;

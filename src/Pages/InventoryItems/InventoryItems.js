import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
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
    <div className="my-4">
      <h1 className="mb-5">
        <span className="fw-bold">Grab Your Vehicle</span> That Matches Your
        Personality
      </h1>
      <div className="container">
        <div className="row gx-4 gy-4">
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination]}
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

                        <div className="card-btn">
                          <Button onClick={() => handleInventoryId(item)}>
                            Check Now
                          </Button>
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

          <div className="text-center">
            <button className="w-25 p-2 mb-4 btn-warning text-danger  fs-4 fw-bold">
              <Link
                to="/manageInventories"
                className="text-danger text-decoration-none"
              >
                Manage Inventories
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;

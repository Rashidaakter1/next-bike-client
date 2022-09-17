import React from "react";
import { Card } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { FaBloggerB } from "react-icons/fa";

const items = [
  {
    id: 1,
    name: "This is First Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-3.jpg",
  },
  {
    id: 2,
    name: "This is Second Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
  {
    id: 3,
    name: "This is Third Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-2.jpg",
  },
  {
    id: 4,
    name: "This is Third Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-1.jpg",
  },
  {
    id: 5,
    name: "This is Four Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
  {
    id: 6,
    name: "This is Six Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
  {
    id: 7,
    name: "This is Seven Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
  {
    id: 8,
    name: "This is Eight Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
  {
    id: 9,
    name: "This is Nine Post For XipBlog",
    img: "https://demo.templatetrend.com/prestashop/PRS373/modules/xipblog/img/home_default-4.jpg",
  },
];
const Blogs = () => {
  return (
    <div className="my-6">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2 fs-1">
          <FaBloggerB />
        </div>
        <h1 className="fw-bold fs-1 mt-3">Latest Blog</h1>
      </div>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
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
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))
          ) : (
            <Loading></Loading>
          )}
        </Swiper>
      </>
    </div>
  );
};

export default Blogs;

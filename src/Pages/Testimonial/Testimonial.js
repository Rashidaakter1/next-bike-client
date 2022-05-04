
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div>
            <h1>TESTIMONIALS</h1>
            <div style={{ 'backgroundImage': "url(https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/dynamic-header-121.jpg ", "backgroundSize": "cover" }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="rounded-circle w-25"
                            src="https://i.ibb.co/S3jyLvj/banner1.png"
                            alt="First slide"
                        />
                        <blockquote className='text-center'>
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?"

                        
                        </blockquote>
                        <div style={{ "height": "5px" }} className='w-50 border border-info'>
                        </div>
                        <h1>NAME</h1>

                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="rounded-circle w-25"
                            src="https://i.ibb.co/RhXG1c1/banner2.png"
                            alt="Second slide"
                        />
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?

                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded-circle w-25"
                            src="https://i.ibb.co/C8nT4WN/banner3.png"
                            alt="Third slide"
                        />
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?

                        </p>
                    </Carousel.Item>

                </Carousel>

            </div>

        </div>
    );
};

export default Testimonial;
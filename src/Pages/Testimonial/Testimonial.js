
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div style={{'background': "rgb(232, 253, 241" }}>
            <h1 className='header mb-0'>TESTIMONIALS</h1>
            <div className='p-3 ' style={{ 'backgroundImage': "url(https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/dynamic-header-121.jpg ", "backgroundSize": "cover" }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <div className='text-center'><img
                            className="rounded-circle w-15"
                            src="https://i.ibb.co/5L8nZKc/review-3.png"
                            alt="First slide"
                        /></div>
                        <blockquote className='detail'>
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?"
                            <div style={{ "height": "1px", "margin-top": "5%" }} className='w-50 border border-secondary  bg-secondary'>
                            </div>

                            <div>
                                <h1 className="name">John Smith</h1>
                            </div>

                        </blockquote>


                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <div  className='text-center'>
                        <img
                            className="rounded-circle w-15"
                            src="https://i.ibb.co/g9QVPjh/review-1.png"
                            alt="Second slide"
                        />
                        </div>
                        <blockquote className='detail'>
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?"
                            <div style={{ "height": "1px", "margin-top": "5%" }} className='w-50 border border-secondary  bg-secondary'>
                            </div>
                            <div>
                                <h1 className="name">Miss Lara</h1>
                            </div>
                        </blockquote>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div  className='text-center'><img
                            className="rounded-circle w-15"
                            src="https://i.ibb.co/yVKkNPL/review-2.png"
                            alt="Third slide"
                        /></div>
                        <blockquote className='detail'>
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis ipsum quia odio dignissimos iste necessitatibus ducimus, explicabo saepe nesciunt delectus maxime suscipit modi labore enim? Accusantium libero corporis debitis?"

                            <div style={{ "height": "1px", "margin-top": "5%" }} className='w-50 border border-secondary  bg-secondary'>
                            </div>

                            <div>
                                <h1 className="name">Adam Smith</h1>
                            </div>
                        </blockquote>





                    </Carousel.Item>

                </Carousel>

            </div>

        </div>
    );
};

export default Testimonial;
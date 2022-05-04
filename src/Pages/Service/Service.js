import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div style={{ "minHeight": "100vh", 'background': "rgb(232, 253, 241" }}>
            <h2 className='header mb-0'>SERVICES THAT WE PROVIDE</h2>


            <div className='container'>

                <div className="row">
                    <div className='col-lg-6 col-md-12 col-sm-12'>

                        <div className='service '>
                            <h2 className='fs-1 text-success p-2'>WHAT CAN WE DO FOR YOU?</h2>

                            <p className='details'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore labore deserunt itaque libero. Animi, sint blanditiis alias exercitationem vero sequi ipsum iusto! Blanditiis error optio qui nostrum, itaque placeat consectetur quos officia reiciendis adipisci animi quasi, vel eveniet rerum.

                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam nisi nostrum similique sunt maiores debitis tempore voluptatem. Dignissimos ut hic eum a et, totam ea, quidem nobis enim asperiores perspiciatis illum quia. Voluptates ipsam tempore, distinctio magnam dignissimos voluptatem?
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <img style={{
                            "marginTop": '20%',
                            "borderRadius": "30px"
                        }} className='w-100' src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Service;
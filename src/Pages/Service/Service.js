import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div style={{ "minHeight": "100vh", 'background': "rgb(232, 253, 241" }}>
            <h2 className='header mb-0'>SERVICES THAT WE PROVIDE</h2>


            <div className='container'>

                <div className="row">
                    <div className='col-lg-4 col-md-12 col-sm-12'>

                        <div className='service '>
                            <h2 className='fs-1 text-success p-2'>WHAT CAN WE DO FOR YOU?</h2>

                            <div className='details'>
                                <h1>Great service is just a tap away</h1>
                                <p className='p-2'>When your car breaks down, you want competent assistance fast. With Motor's Mania Service, that's no problem at all. Thanks to our world's largest workshop network of over 15,000 authorized workshops in 150 countries, excellent service is just around the corner.</p>
                                <br />
                                <h1>Our tech got your back</h1>

                                <p className='p-2'>
                                    Modern vehicles are equipped with advanced technology and quite a lot of electronics. But that complexity doesn’t slow us down in helping you. Since all our workshops have the latest diagnostic tools, covering just about all makes and vehicles. This reduces troubleshooting time, makes service and maintenance reliable and effective, and repairs inexpensive and transparent. And if you have an older car with less tech? Don’t worry, we still know how to ﬁx those, too.
                                </p>
                                <br />

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <img style={{
                            "marginTop": '20%',
                            "borderRadius": "30px",
                            "height": '50vh'
                        }} className='w-100' src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="service">
                            <div className="details">
                                <h1> Spare parts that never spare on quality</h1>

                                <p className='p-2'>We do everything we can to get your car repaired as quickly as possible. Except for compromising on quality. That’s why we at Motor's Mania Service only use high-quality spare parts. This way, we can always ensure no loss of manufacturer’s warranty coverage for your vehicle. No matter which of our worldwide workshops you go to.</p>
                                <br />

                                <h1>Always up to date</h1>
                                <p className='p-2'>The future of driving is already on the road. That’s why we at Motor's Mania Service constantly keep our employees up to date with regular, future-oriented training courses. So that your car, whether being repaired or serviced, is always in the best hands – both today and tomorrow!</p>
                                <br />
                                <h1> For everything your car needs</h1>
                                <p className='p-2'>Whatever your car issue, you can come to us and count on us to fix it. With the quality, technology and expertise that you and your car deserve. With transparent billing and fast, reliable service you can trust. We are committed to excellence. So that you are mobile again in no time and remain that way for miles to come. Enjoy Car Service</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Service;
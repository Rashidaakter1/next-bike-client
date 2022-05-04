import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Service></Service>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
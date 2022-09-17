import React from 'react';
import MiniBanner from '../../MiniBanner/MiniBanner';
import MinibannerLast from '../../MiniBanner/MinibannerLast';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <div className='mx-4'>
            <MiniBanner className='m-0'/>
            <Banner></Banner>
            <MinibannerLast />
            <InventoryItems></InventoryItems>
            <Service></Service>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
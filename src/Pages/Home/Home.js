import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <h1>Home</h1>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data.slice(0,6)))
    }, [])
    return (
        <div>
            <h1>Inventory Items</h1>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-3'>
                    {
                        items.map(item => <InventoryItem
                            key={item._id}
                            item={item}

                        ></InventoryItem>)
                    }
                    <Link  to='/manageInventories'>ManageInventories</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
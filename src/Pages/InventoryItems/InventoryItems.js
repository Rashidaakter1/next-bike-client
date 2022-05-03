import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
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
            <h1 className='text-center mt-5 mb-5'>Inventory Items</h1>
            <div className='container'>
                <div className='row gx-4  gy-4'>
                    {
                        items? items.map(item => <InventoryItem
                            key={item._id}
                            item={item}

                            ></InventoryItem>)
                        :<Loading></Loading>
                    }
                    <Link  to='/manageInventories'>ManageInventories</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
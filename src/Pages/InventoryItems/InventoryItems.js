import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://pure-shore-71929.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])
    return (
        <div >
            <h1>Grab Your Vehicle That Matches Your Personality</h1>
            <div className='container'>
                <div className='row gx-4  gy-4'>
                    {
                        items ? items.map(item => <InventoryItem
                            key={item._id}
                            item={item}

                        ></InventoryItem>)
                            : <Loading></Loading>
                    }
                    <div className="text-center">
                        <button className='w-25 p-2 mb-4 btn-warning text-danger  fs-4 fw-bold'><Link to='/manageInventories' className='text-danger text-decoration-none' >Manage Inventories</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
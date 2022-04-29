import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0,6)))
    }, [])
    
    const {id}=useParams()
    return (
        <div style={{"minHeight":"100vh"}}>
            <h1>inventory :{id}</h1>
             
        </div>
    );
};

export default Inventory;
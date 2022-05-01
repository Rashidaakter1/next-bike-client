import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const {id}=useParams()
    // console.log(id)
    const [item, setItem] = useState([]);
    useEffect(() => {
        // http://localhost:5000/inventory/626bc564de62a7fcf9d7d7b3
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    // console.log(items)
    
    
    return (
        <div style={{"minHeight":"100vh"}}>

            <h1>{item._id} : {item.name}</h1>

           {/* {
               items.map(item=><div key={item._id}>
                   <h1>item id : {item._id}</h1>
                   <h2>{item.name}</h2>
               </div>)
           } */}
            

              <Link  to='/manageInventories'>ManageInventories</Link>
        </div>
    );
};

export default Inventory;

import React, { useEffect, useState } from 'react';
import { Button, ButtonToolbar, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
   
    const [item, setItem] = useState({});

    const handleQuantity = (id) => {

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));



    }
    const reStockQuantity=(id)=>{
        console.log(item);
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })

    }, [])


    


    // }
    // const reStockQuantity =(event) => {
    //     event.preventDefault()
    //     const name=event.target.name.value
    //     const quantity =event.target.quantity.value

    //     console.log(name,quantity)
    //     const url=`http://localhost:5000/inventory/${item._id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         body: JSON.stringify({name,quantity}),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
      

    // };







    return (
        <div style={{ "minHeight": "100vh" }}>

            <h1>{item._id} : </h1>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        ID : {item._id}
                    </Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        Price : {item.price}
                    </Card.Text>
                    <Card.Text>
                        Qunatity : {item.quantity}
                    </Card.Text>
                    <Card.Text>
                        Supplier-Name : {item.supplierName}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleQuantity(item._id)} >Delivered</Button>
                </Card.Body>
            </Card>
            <h1>add new items</h1>
            
                <input placeholder='Name' type='text' name='name' className='mb-3 w-50 mx-auto '/>
                <input placeholder='Quantity' type='number'name='quantity' className='mb-3 w-50 mx-auto ' />

               
                <Button onClick={()=>reStockQuantity(item._id)}
                 className='mb-3 w-50 mx-auto' 
               >Restock</Button>
                
                
                
                
            


            <Link to='/manageInventories'>ManageInventories</Link>
        </div>
    );
};

export default Inventory;

import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()

    const [item, setItem] = useState({});
    useEffect(() => {
        
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })

        fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                body: JSON.stringify(item),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) =>console.log(json));
          
    }, [])

   

  


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
                    <Button variant="primary"  >Delivered</Button>
                </Card.Body>
            </Card>


            <Link to='/manageInventories'>ManageInventories</Link>
        </div>
    );
};

export default Inventory;
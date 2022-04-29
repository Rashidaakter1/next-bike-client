import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const {_id, name, price, img, description, supplierName, quantity } = item
    
    
    const navigate = useNavigate()

    const handleInventoryId=(item)=>{
        navigate(`/inventory/${item._id}`)
        
    }

    
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 gy-3 '>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        description: {description}
                    </Card.Text>
                    <Card.Text>
                        price:  {price}
                    </Card.Text>
                    <Card.Text>
                        supplierName:  {supplierName}
                    </Card.Text>
                    <Card.Text>
                        quantity:{quantity}
                    </Card.Text>
                    <Button onClick={()=>handleInventoryId(item)}  variant="primary">Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default InventoryItem;
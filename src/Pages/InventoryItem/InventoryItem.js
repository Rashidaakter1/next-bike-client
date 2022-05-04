import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({ item }) => {
    const {_id, name, price, img, description, supplierName, quantity } = item
    
    
    const navigate = useNavigate()

    const handleInventoryId=(item)=>{
        navigate(`/inventory/${item._id}`)
        
    }

    
    return (
        <div className='col-lg-4 col-md-6'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='cards'>{name}</Card.Title>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    <Card.Text>
                        Price:  {price}
                    </Card.Text>
                    <Card.Text>
                        SupplierName:  {supplierName}
                    </Card.Text>
                    <Card.Text>
                        Quantity:{quantity}
                    </Card.Text>
                    <div className='card-btn' >
                    <Button  onClick={()=>handleInventoryId(item)}  >Update</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default InventoryItem;
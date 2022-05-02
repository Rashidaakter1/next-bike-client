
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const ManageInventories = () => {
   
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setDataTable(data))
    }, [])
   

    
    const handleDelete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                const agree = window.confirm('Are you want to delete this item?')
                if (agree) {
                    const remaining =dataTable.filter(item => item._id !== id)
                    setDataTable(remaining)
                }
            })


    }

    return (
        <div style={{ "minHeight": "100vh" }}>
            <h1>Manage Inventories</h1>

            <h1>dynamic table</h1>

            <Table striped bordered hover variant="">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {
                    dataTable.map(data =>
                        <tbody>
                            <tr>
                                <td>{data.number}</td>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.quantity}</td>
                                <td><button>Add</button>
                                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                                </td>


                            </tr>
                        </tbody>
                    )
                }
            </Table>
            
            <button><Link to='/addNewItem' >Add New Item</Link></button>
        </div>
    );
};

export default ManageInventories;
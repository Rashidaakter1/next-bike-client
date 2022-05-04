
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventories.css'





const ManageInventories = () => {

    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => setDataTable(data))
    }, [])



    const handleDelete = (id) => {
        const url = `http://localhost:5000/manage/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                const agree = window.confirm('Are you want to delete this item?')
                if (agree) {
                    const remaining = dataTable.filter(item => item._id !== id)
                    setDataTable(remaining)
                }
            })


    }

    return (
        <div style={{ "minHeight": "100vh", 'background': "rgb(232, 253, 241" }}>
            <h1 className='header' >Manage Inventories</h1>


            <div style={{ 'background': " rgb(249, 232, 235)" }} >
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
                                    <td className='text-center'>
                                        <button onClick={() => handleDelete(data._id)}>Delete</button>
                                    </td>


                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>

            <div className="text-center">
                <button className='w-25 p-2 mb-4 btn-warning text-danger  fs-4 fw-bold'><Link to='/addNewItem' className='text-danger text-decoration-none' >Add New Item</Link></button>
            </div>
        </div>
    );
};

export default ManageInventories;
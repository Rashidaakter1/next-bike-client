import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/inventory/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(result=>console.log(result));

            navigate('/manageInventories')

         
    };

    return (
        <div style={{ "minHeight": "100vh" }}>
            <h1>add new items</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type='text' className='mb-3 w-50 mx-auto ' {...register("name")} />
                <input placeholder='Email' type='email' className='mb-3 w-50 mx-auto ' {...register("email")} />
                <input placeholder='Price' type='number' className='mb-3 w-50 mx-auto ' {...register("price")} />
                <input placeholder='Quantity' type='number' className='mb-3 w-50 mx-auto ' {...register("quantity")} />
                <input placeholder='PhotoUrl' type='text' className='mb-3 w-50 mx-auto ' {...register("img")} />

                <input className='mb-3 w-50 mx-auto ' type="submit" value='Add stock' />
            </form>
          
        </div>
    );
};

export default AddNewItem;
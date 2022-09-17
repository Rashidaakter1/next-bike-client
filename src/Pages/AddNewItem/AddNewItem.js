import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://pure-shore-71929.herokuapp.com/inventory/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(result => console.log(result));

        navigate('/manageInventories')


    };

    return (
        <div style={{ "minHeight": "100vh" , 'background':"rgb(232, 253, 241"  }}>
            <h1 className='header'>Add New Items</h1>

            <div style={{'background':"rgb(230, 178, 178)"}} className='container  rounded p-3 w-50 mt-3 mb-4'>
                <h2 className='mt-4 mb-4 text-center'>Add Items</h2>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input style={{"height":'40px'}} placeholder='Name' type='text' className='mb-3 w-100 mx-auto rounded p-2 ' {...register("name")} />
                    <input style={{"height":'40px'}}  placeholder='Email' type='email' value={user?.email} readOnly className='mb-3 w-100  mx-auto rounded p-2' {...register("email")} />
                    <input style={{"height":'40px'}}  placeholder='Price' type='number' className='mb-3 w-100  mx-auto rounded p-2' {...register("price")} />
                    <input style={{"height":'40px'}}  placeholder='Quantity' type='number' className='mb-3 w-100  mx-auto rounded p-2' {...register("quantity")} />
                    <input style={{"height":'40px'}}  placeholder='PhotoUrl' type='text' className='mb-3 w-100  mx-auto rounded p-2 ' {...register("img")} />

                    <input className='w-50 mt-3 p-2 mx-auto mb-4 btn-warning text-danger fs-4 fw-bold' type="submit" value='Add stock' />
                </form>
            </div>

        </div>
    );
};

export default AddNewItem;
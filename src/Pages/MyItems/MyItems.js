import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../Hooks/useItems';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items,setItems]=useItems([])
    const email = user?.email
    console.log(email);
    useEffect(()=>{
        const url =`https://pure-shore-71929.herokuapp.com/inventory?email=${email}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
       
    },[])

//    if(user.email === items.email){
//        items.filter(item=> item._id === )
//    }
    
   
    return (
        <div  style={{ "minHeight": "100vh" }}>
            {user?.email}
            { 
                 
                items.map(item=><div key={item._id}>
                    
                    <h1>{item.name}</h1>
                    </div>)
            }
        </div>
    );
};

export default MyItems;
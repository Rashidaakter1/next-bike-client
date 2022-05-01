import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../Hooks/useItems';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items,setItems]=useItems()
//    if(user.email === items.email){
//        items.filter(item=> item._id === )
//    }
    
    console.log(user,items);
    return (
        <div  style={{ "minHeight": "100vh" }}>
            { 
                 
                items.map(item=><div key={item._id}>
                    
                    <h1>{item.name}</h1>
                    </div>)
            }
        </div>
    );
};

export default MyItems;
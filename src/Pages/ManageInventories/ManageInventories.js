
import { Link } from 'react-router-dom';
import CustomLink from '../../Hooks/CustomHooks'
import useItems from '../../Hooks/useItems';



const ManageInventories = () => {
    const [items, setItems] = useItems()
    console.log(items);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'DELETE',
        })
       .then(res=>res.json())
       .then(data=>{
          
           const agree =window.confirm('Are you want to delete this item?')
           if(agree){
            const remaining = items.filter(item=>item._id !== id)
            setItems(remaining)
           }
       })


    }

    return (
        <div style={{ "minHeight": "100vh" }}>
            <h1>Manage Inventories</h1>
            {
                items.map(item => <div key={item._id} >
                    <h1> item : {item._id} {item.name} <button onClick={() => handleDelete(item._id)}>X</button> </h1>
                </div>)


            }
            <button><CustomLink to='/addNewItem' >Add New Item</CustomLink></button>
        </div>
    );
};

export default ManageInventories;
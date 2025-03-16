import { useEffect, useState } from 'react';
import './ItemList.css';  // Correct CSS import


const API_URI = import.meta.env.VITE_API_URI;

const ItemList = () => {
    const [items, setItems] = useState([]);

    // Fetch items from API
    const fetchItems = async () => {
        try {
            const response = await fetch(`${API_URI}/doors`);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Delete item by ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URI}/doors/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setItems((prevItems) => prevItems.filter((item) => item.id !== id));
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
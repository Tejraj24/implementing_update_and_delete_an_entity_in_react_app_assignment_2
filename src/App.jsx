import React from 'react';
import ItemList from './components/ItemList'; // Import ItemList
import './App.css'; // Import main App styles

const App = () => {
    return (
        <div className="app-container">
            <ItemList />
        </div>
    );
};

export default App;
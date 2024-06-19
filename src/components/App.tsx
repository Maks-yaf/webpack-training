import React from 'react';
import './App.css';

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+++</button>
        </div>
    );
};

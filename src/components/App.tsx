import React from 'react';
import classes from './App.module.scss';

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                25
            </button>
        </div>
    );
};

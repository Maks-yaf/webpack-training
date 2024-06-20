import React from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <Link to={`/about`}>about</Link>
            <br/>
            <Link to={`/shop`}>shop</Link>
                <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                25
            </button>
            <About />
        </div>
    );
};

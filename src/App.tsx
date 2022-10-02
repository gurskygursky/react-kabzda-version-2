import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/rating/Rating';


function App() {

    console.log('App rendering');

    return (
        <>
            <Accordion/>
            <Rating/>
        </>
    );
}

export default App;

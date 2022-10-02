import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/rating/Rating';
import PageTitle from './components/page-title/PageTitle';


function App() {

    console.log('App rendering');

    return (
        <>
            <PageTitle title={'This is app component'}/>
            <PageTitle title={'React kabzda kak podrobno'}/>
            <Accordion/>
            <Rating value={3}/>
            <Rating value={2}/>
        </>
    );
}

export default App;

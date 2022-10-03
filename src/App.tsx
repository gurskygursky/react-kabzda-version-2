import React from 'react';
import './App.css';
import Accordion, {
    AccordionWithDestructureProps,
    AccordionWithDestructureProps2
} from './components/accordion/Accordion';
import Rating from './components/rating/Rating';
import PageTitle from './components/page-title/PageTitle';


function App() {

    console.log('App rendering');

    return (
        <>
            <PageTitle title={'This is app component'}/>
            <PageTitle title={'React kabzda kak podrobno'}/>
            <Accordion title={'Users'}/>
            <Accordion title={'React kabzda lessons list'}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <AccordionWithDestructureProps AccordionProps={{title: 'Kabzda destructure props'}}/>
            <AccordionWithDestructureProps2 title={'Destructure props'}/>
        </>
    );
}

export default App;

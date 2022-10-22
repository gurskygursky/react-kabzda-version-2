import React from 'react';
import './App.css';
import Accordion, {
    AccordionWithDestructureProps,
    AccordionWithDestructureProps2
} from './components/accordion/Accordion';
import Rating from './components/rating/Rating';
import PageTitle from './components/page-title/PageTitle';
import {OnOff} from './components/on-off/OnOff';


function App() {

    console.log('App rendering');

    return (
        <>
            {/*<PageTitle title={'This is app component'}/>*/}
            {/*<PageTitle title={'React kabzda kak podrobno'}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            {/*<Accordion title={'React kabzda lessons list'} collapsed={true}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<AccordionWithDestructureProps AccordionProps={{title: 'Kabzda destructure props'}}/>*/}
            {/*<AccordionWithDestructureProps2 title={'Destructure props'}/>*/}
            <OnOff switch={true}/>
            <OnOff switch={false}/>
        </>
    );
}

export default App;

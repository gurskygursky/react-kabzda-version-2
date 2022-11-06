import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from 'src/components/accordion/ControlledAccordion';
import {ControlledOnOff} from './components/on-off/ControlledOnOff';
import {ControlledRating, RatingValueType} from './components/rating/ControlledRating';


function App() {

    console.log('App rendering');

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);



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
            {/*<OnOff switch={true}/>*/}
            {/*<OnOff switch={false}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion title={'React kabzda lessons list'}/>*/}
            <ControlledAccordion title={'React kabzda'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <ControlledOnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <ControlledRating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        </>
    );
}

export default App;

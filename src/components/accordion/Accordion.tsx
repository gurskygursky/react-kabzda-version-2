import React from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

const Accordion = () => {

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    );
};

export default Accordion;
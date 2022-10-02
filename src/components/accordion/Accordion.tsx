import React from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type AccordionPropsType = {
    title: string;
}

const Accordion = (props: AccordionPropsType) => {

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    );
};

export default Accordion;
import React, {FC, useState} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type UncontrolledAccordionPropsType = {
    title: string;
}


const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle title={props.title}/><button onClick={() => setCollapsed(!collapsed)}>collapsed</button>
            {!collapsed && <AccordionBody/>}
        </>
    );
};

interface Props {
    AccordionProps: {
        title: string;
    };
}

export const AccordionWithDestructureProps: FC<Props> = ({AccordionProps: {title}}) => {

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </>
    );
};

type AccordionWithDestructurePropsType = {
    title: string;
}

export const AccordionWithDestructureProps2 = (props: AccordionWithDestructurePropsType) => {

    const {title} = props;

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </>
    );
};

export default UncontrolledAccordion;


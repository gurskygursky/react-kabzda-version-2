import React, {FC} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

const Accordion = (props: AccordionPropsType) => {

    console.log('Accordion rendering');

    return (
        <>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    );
};

export default Accordion;

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

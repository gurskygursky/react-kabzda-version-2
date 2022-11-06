import React, {FC} from 'react';
import AccordionBody from './AccordionBody';
import {ControlledAccordionTitle} from './ControlledAccordionTitle';

type ControlledAccordionPropsType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}
export const ControlledAccordion: FC<ControlledAccordionPropsType> = (props) => {
    return (
        <>
            <ControlledAccordionTitle title={props.title}
                                      collapsed={props.collapsed}
                                      setCollapsed={() => props.setCollapsed(!props.collapsed)}
            />
            {!props.collapsed && <AccordionBody/>}
        </>
    );
};

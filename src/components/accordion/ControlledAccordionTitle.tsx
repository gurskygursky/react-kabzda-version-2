import React, {FC} from 'react';

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}
export const ControlledAccordionTitle: FC<AccordionTitlePropsType> = (props) => {
    return (
        <>
            <h4 onClick={() => props.setCollapsed(!props.collapsed)}>
                {props.title}
            </h4>
        </>
    );
};
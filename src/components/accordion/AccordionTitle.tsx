import React from 'react';

type AccordionTitlePropsType = {
    title: string;
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    console.log('AccordionTitle rendering');

    return (
        <h4>
            {
                props.title
            }
        </h4>
    );
};

export default AccordionTitle;
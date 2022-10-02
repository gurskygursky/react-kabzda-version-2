import React from 'react';

const Rating = () => {
    return (
        <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </>
    );
};

type StarPropsType = {
    selected: boolean;
}

const Star = (props: StarPropsType) => {
    return (
        <>
            {
                props.selected
                    ? <b>star </b>
                    : <span>star </span>
            }
        </>
    );
};

export default Rating;
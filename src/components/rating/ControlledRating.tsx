import React, {FC, useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type ControlledRatingPropsType = {
    ratingValue: RatingValueType;
    setRatingValue: (ratingValue: RatingValueType) => void;
}

export const ControlledRating: FC<ControlledRatingPropsType> = (props) => {

    console.log('ControlledRating rendering');

    return (
        <div>
            <Star selected={props.ratingValue > 0} setRatingValue={() => props.setRatingValue(1)}/>
            <Star selected={props.ratingValue > 1} setRatingValue={() => props.setRatingValue(2)}/>
            <Star selected={props.ratingValue > 2} setRatingValue={() => props.setRatingValue(3)}/>
            <Star selected={props.ratingValue > 3} setRatingValue={() => props.setRatingValue(4)}/>
            <Star selected={props.ratingValue > 4} setRatingValue={() => props.setRatingValue(5)}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean;
    setRatingValue: () => void;
}

const Star = (props: StarPropsType) => {

    const onClickRatingValueHandler = () => {
        props.setRatingValue();
    }

    return (
        <>
            {
                props.selected
                    ? (<span onClick={onClickRatingValueHandler}><b>star </b></span>)
                    : <span onClick={onClickRatingValueHandler}>star </span>
            }
        </>
    );
};

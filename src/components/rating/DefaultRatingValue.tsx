import React, {useState} from 'react';

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type DefaultRatingPropsType = {
    defaultValue?: RatingValueType;
    onChange: (value: RatingValueType) => void;
}
export const DefaultRatingValue = (props: DefaultRatingPropsType) => {

    console.log('Rating rendering');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={ratingValue > 0} setRatingValue={() => {setRatingValue(1); props.onChange(ratingValue)}}/>
            <Star selected={ratingValue > 1} setRatingValue={() => {setRatingValue(2); props.onChange(ratingValue)}}/>
            <Star selected={ratingValue > 2} setRatingValue={() => {setRatingValue(3); props.onChange(ratingValue)}}/>
            <Star selected={ratingValue > 3} setRatingValue={() => {setRatingValue(4); props.onChange(ratingValue)}}/>
            <Star selected={ratingValue > 4} setRatingValue={() => {setRatingValue(5); props.onChange(ratingValue)}}/>
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

import React, {useState} from 'react';

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

const UncontrolledRating = () => {

    console.log('Rating rendering');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div>
            <Star selected={ratingValue > 0} setRatingValue={() => setRatingValue(1)}/>
            <Star selected={ratingValue > 1} setRatingValue={() => setRatingValue(2)}/>
            <Star selected={ratingValue > 2} setRatingValue={() => setRatingValue(3)}/>
            <Star selected={ratingValue > 3} setRatingValue={() => setRatingValue(4)}/>
            <Star selected={ratingValue > 4} setRatingValue={() => setRatingValue(5)}/>
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

export default UncontrolledRating;
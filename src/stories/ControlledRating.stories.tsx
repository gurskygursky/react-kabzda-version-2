import React, {useState} from "react";
import {storiesOf} from "@storybook/react";
import {ControlledRating, RatingValueType} from "../components/rating/ControlledRating";

storiesOf("ControlledRating", module)
.add('this story controlled rating', () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1);

    return (
        <ControlledRating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
    );
});

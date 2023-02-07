import React from "react";
import {storiesOf} from "@storybook/react";
import Rating from "../components/rating/Rating";

storiesOf("Rating", module)
    .add("empty",
        () => <Rating value={0}/>
    )
    .add("one star",
        () => <Rating value={1}/>
    )
    .add( 'two stars',
        () => <Rating value={2}/>
    )
    .add("three star",
        () => <Rating value={3}/>
    )
    .add( 'four stars',
        () => <Rating value={4}/>
    )
    .add( 'five stars',
        () => <Rating value={5}/>
    )
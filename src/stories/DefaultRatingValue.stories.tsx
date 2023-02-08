import React from "react";
import {storiesOf} from "@storybook/react";
import {DefaultRatingValue} from "../components/rating/DefaultRatingValue";
import {action} from "@storybook/addon-actions";

storiesOf("DefaultRatingValue", module)
    .add("this story DefaultRatingValue",
        () => {
            const callback = action('rating changed');
            return (
                <DefaultRatingValue defaultValue={1} onChange={callback}/>
            )
        }
    )


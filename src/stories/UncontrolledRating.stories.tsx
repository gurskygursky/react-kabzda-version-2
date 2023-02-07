import React from "react";
import {storiesOf} from "@storybook/react";
import UncontrolledRating from "../components/rating/UncontrolledRating";

storiesOf("UncontrolledRating", module)
    .add("this story uncontrolled rating",
        () => <UncontrolledRating/>
    )


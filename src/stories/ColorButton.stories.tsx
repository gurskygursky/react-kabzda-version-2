import React from "react";
import {storiesOf} from "@storybook/react";
import ColorButton from "./ColorButton";

storiesOf("ColorButton", module)
    .add("red",
        () => <ColorButton color="red"/>
    )
    .add("blue",
        () => <ColorButton color="blue"/>
    )
    .add( 'gold',
        () => <ColorButton color={'gold'}/>
    )
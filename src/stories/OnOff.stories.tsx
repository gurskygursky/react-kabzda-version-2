import React from "react";
import {storiesOf} from "@storybook/react";
import { OnOff } from "src/components/on-off/OnOff";

storiesOf("OnOff", module)
    .add("this story OnOff on",
        () => <OnOff switch={true}/>
    )
    .add("this story OnOff off",
        () => <OnOff switch={false}/>
    )



import React from "react";
import {storiesOf} from "@storybook/react";
import { UncontrolledOnOff } from "src/components/on-off/UncontrolledOnOff";

storiesOf("UncontrolledOnOff", module)
    .add("this story UncontrolledOnOff",
        () => <UncontrolledOnOff/>
    )


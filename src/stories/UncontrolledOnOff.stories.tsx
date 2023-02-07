import React from "react";
import {storiesOf} from "@storybook/react";
import { UncontrolledOnOff } from "../components/on-off/UncontrolledOnOff";

storiesOf("UncontrolledOnOff", module)
    .add("this story UncontrolledOnOff",
        () => <UncontrolledOnOff/>
    )


import React, {useState} from "react";
import {storiesOf} from "@storybook/react";
import {ControlledOnOff} from "src/components/on-off/ControlledOnOff";

storiesOf("ControlledOnOff", module)
    .add("this story ControlledOnOff",
        () => {
            const [switchOn, setSwitchOn] = useState<boolean>(false);
            return (
                <ControlledOnOff switchOn={switchOn} setSwitchOn={() => setSwitchOn(!switchOn)}/>
            )
        });


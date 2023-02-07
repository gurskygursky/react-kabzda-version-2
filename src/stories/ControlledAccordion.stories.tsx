import React, {useState} from "react";
import {storiesOf} from "@storybook/react";
import {ControlledAccordion} from "../components/accordion/ControlledAccordion";

storiesOf("Controlled Accordion", module)
    .add("this story Controlled Accordion",
        () => {

            const [collapsed, setCollapsed] = useState<boolean>(false);

            return (
                <ControlledAccordion title={'Accordion Title'} collapsed={collapsed}
                                     setCollapsed={() => setCollapsed(!collapsed)}/>
            )
        });


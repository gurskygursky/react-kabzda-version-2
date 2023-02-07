import React from "react";
import {storiesOf} from "@storybook/react";
import Accordion from "../components/accordion/Accordion";

storiesOf("Accordion", module)
    .add("this story Accordion",
        () => {

            return (
                <Accordion title={'Accordion Title'} collapsed={true}/>
            )
        });


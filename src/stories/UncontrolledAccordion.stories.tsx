import React from "react";
import {storiesOf} from "@storybook/react";
import UncontrolledAccordion from "../components/accordion/UncontrolledAccordion";

storiesOf("Uncontrolled Accordion", module)
    .add("this story Uncontrolled Accordion",
        () => {

            return (
                <UncontrolledAccordion title={'Accordion Title'}/>
            )
        });


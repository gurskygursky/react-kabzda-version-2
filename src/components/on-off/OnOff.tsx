import React from 'react';

type OnOffPropsType = {
    switch: boolean;
}

export const OnOff = (props: OnOffPropsType) => {

    const switchOnStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switch ? 'green' : 'white'
    };
    const switchOffStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switch ? 'white' : 'red'
    };
    const switchIndicatorStyle = {
        width: '15px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switch ? 'green' : 'red'
    };

    return (
        <div>
            <div style={switchOnStyle}>On</div>
            <div style={switchOffStyle}>Off</div>
            <div style={switchIndicatorStyle}></div>
        </div>
    );
};

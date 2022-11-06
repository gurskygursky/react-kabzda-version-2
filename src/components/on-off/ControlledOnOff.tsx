import React, { FC } from 'react';

type ControlledOnOffPropsType = {
    switchOn: boolean;
    setSwitchOn: (switchOn: boolean) => void;
}

export const ControlledOnOff: FC<ControlledOnOffPropsType> = (props) => {

    const switchOnStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switchOn ? 'green' : 'white'
    };
    const switchOffStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switchOn ? 'white' : 'red'
    };
    const switchIndicatorStyle = {
        width: '15px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: props.switchOn ? 'green' : 'red'
    };

    return (
        <div>
            <div style={switchOnStyle} onClick={() => props.setSwitchOn(true)}>On</div>
            <div style={switchOffStyle} onClick={() => props.setSwitchOn(false)}>Off</div>
            <div style={switchIndicatorStyle}></div>
        </div>
    );
};

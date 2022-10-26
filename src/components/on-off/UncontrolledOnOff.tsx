import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [switchOn, setSwitchOn] = useState<boolean>(false);

    const switchOnStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: switchOn ? 'green' : 'white'
    };
    const switchOffStyle = {
        width: '80px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: switchOn ? 'white' : 'red'
    };
    const switchIndicatorStyle = {
        width: '15px',
        height: '15px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '5px',
        margin: '10px 0px 0px 10px',
        display: 'inline-block',
        background: switchOn ? 'green' : 'red'
    };

    const onClickSwitchOnHandler = () => {
        setSwitchOn(true);
    }

    const onClickSwitchOffHandler = () => {
        setSwitchOn(false);
    }

    return (
        <div>
            <div style={switchOnStyle} onClick={onClickSwitchOnHandler}>On</div>
            <div style={switchOffStyle} onClick={onClickSwitchOffHandler}>Off</div>
            <div style={switchIndicatorStyle}></div>
        </div>
    );
};

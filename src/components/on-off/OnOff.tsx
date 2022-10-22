import React from 'react';

type OnOffPropsType = {
    switch: boolean;
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <div>
            <div style={{
                width: '80px',
                height: '15px',
                borderStyle: 'solid',
                borderWidth: '3px',
                borderRadius: '5px',
                margin: '10px 0px 0px 10px',
                display: 'inline-block',
                background: props.switch ? 'green' : 'white'
            }}>On
            </div>
            <div style={{
                width: '80px',
                height: '15px',
                borderStyle: 'solid',
                borderWidth: '3px',
                borderRadius: '5px',
                margin: '10px 0px 0px 10px',
                display: 'inline-block',
                background: props.switch ? 'white' : 'red'
            }}>Off
            </div>
            <div style={{
                width: '15px',
                height: '15px',
                borderStyle: 'solid',
                borderWidth: '3px',
                borderRadius: '5px',
                margin: '10px 0px 0px 10px',
                display: 'inline-block',
                background: props.switch ? 'green' : 'red'
            }}></div>
        </div>
    );
};

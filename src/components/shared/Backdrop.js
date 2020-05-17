import React from 'react';
import ReactDOM from 'react-dom';

export default function Backdrop(props){
    return ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>,
        document.getElementById('backdropHook')
    )
}
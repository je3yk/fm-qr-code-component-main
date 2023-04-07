import React from 'react';
import './style.scss';

export default function QrCodeComponent(props) {
    return (
        <div className="qr-container">
            <img className="qr-image" src={props.image} alt="qr-code" />
            <div className="text-container">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
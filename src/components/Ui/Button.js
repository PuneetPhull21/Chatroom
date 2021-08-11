import React from 'react';
import { Button as BButton } from 'react-bootstrap';
import Style from "./button.module.css";

export default function Button(props) {
    return (
        <div>
            <BButton onClick={props.onClick} className={Style.button}>{props.children}</BButton>
        </div>
    )
}

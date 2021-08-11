import React from 'react';
import {Card} from 'react-bootstrap'; 
import Style from './Card.module.css';

export default function Caard(props) {
    return (
        <>
        <Card className={`${Style.card}`} >{props.children}</Card>
        </>
    )
}

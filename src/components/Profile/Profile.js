import React from 'react';
import {Card} from 'react-bootstrap';
import Button from '../Ui/Button';
import Style from './Profile.module.css';

export default function Profile() {
    return (
       <Card className={`${Style.card}`}>
        <img  className={`${Style.avtar}`} src="//www.jquery-az.com/html/images/banana.jpg"  alt="pictureload"/>
        <br></br>
        <br></br>
        <h6>Name :  </h6>
        <br></br>
        <h6>Email :  </h6>
        <br></br>
        <h6>Date of Birth : </h6>
        <br></br>
        <Button>Log out</Button>
       </Card>
    )
}

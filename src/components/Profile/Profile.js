import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import Button from '../Ui/Button';
import Style from './Profile.module.css';
import { useHistory } from 'react-router-dom';

export default function Profile() {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const [dat,setdata] = useState([]);
    const requestoptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','authorization':`bearer ${token}` },
    }
    useEffect(()=>{
       fetch('http://localhost:4000/users/profile',requestoptions)
       .then(response=> response.json())
       .then((data)=>{
           setdata(data.data);
       })
       // eslint-disable-next-line
    },[])
    const logout = () =>{
        localStorage.clear();
        history.push('/home');
    }
    return (
        <>
       <Card className={`${Style.card}`}>
        <img  className={`${Style.avtar}`} src="//www.jquery-az.com/html/images/banana.jpg"  alt="pictureload"/>
        <br></br>
        <br></br>
        <h6>Name : {dat.name} </h6>
        <br></br>
        <h6>Email : {dat.email} </h6>
        <br></br>
        <h6>Date of Birth : {dat.dob} </h6>
        <br></br>
        <Button onClick={logout} >Log out</Button>       
       </Card>
       
    </>
    )
}

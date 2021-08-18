import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import Input from '../Ui/input';
import Button from '../Ui/Button';

export default function ForgetPassword() {
    const [email,setemail] = useState('');
    const [error,seterrors] = useState(null);
    const [success,setsuccess] = useState(null);

    const emailhandler = (event)=>{
      setemail({...email,email:event.target.value}); 
    }
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(email)
    }
    const forgetPassword = (event)=>{
        event.preventDefault();
        fetch('http://localhost:4000/forgetpassword',requestoptions)
        .then(response => response.json()).then((data)=>{
            if(data.status===400){
             seterrors(data.message)
            }
            else{
              setsuccess(data.message);
              seterrors('');
              setemail('');
            }
        })
    }
    return (
        <Card style={{width:'30rem',marginLeft:'29rem',marginTop:'13rem'}} >
          <h1 style={{marginLeft:'5rem'}} >Reset Password</h1>
         { error!==null ? <h5 style={{color:'red',marginLeft:'8rem'}} >{error}</h5>: ""}
         { success!==null ? <h5 style={{color:'green',marginLeft:'8rem'}} >{success}</h5>: ""}
          <Input label={"Email"} placeholder={"Enter the Email"} type={"email"} onChange={emailhandler} />
          <Button onClick={forgetPassword} >Submit</Button>
        </Card>
    )
}

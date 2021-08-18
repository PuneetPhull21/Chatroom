import React,{useState} from 'react';
import {Card} from 'react-bootstrap';
import Input from '../Ui/input';
import Button from '../Ui/Button';
import {useHistory} from 'react-router-dom';
import { setTimeout } from 'timers';

export default function Changepassword() {
const history = useHistory();
    const [password,setpassowrd]= useState({
        oldpassword:'',
        newpassword:'',
    });
    const oldpasswordhandler = (event)=>{
        setpassowrd({...password,oldpassword:event.target.value});
    }
    const newpasswordhandler = (event)=>{
          setpassowrd({...password,newpassword:event.target.value});
    }
    const token = localStorage.getItem('token');
    const requestoptions ={
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                    'authorization':`bearer ${token}`,},
        body:JSON.stringify(password)
    } 
    const [errors,seterros] = useState({
       oldpassworderror:null,
       succeespassword:null,
       samepassword:null,
      
    });
    const changepassword = (event)=>{
         event.preventDefault();
         if(password.oldpassword === password.newpassword){
             seterros({...errors,samepassword:"new Password not be same with old Password"})
         }
         else{
         fetch('http://localhost:4000/changepassword',requestoptions)
         .then(response => response.json())
         .then((data)=>{
             if(data.status === 401){
                 seterros({...errors,oldpassword:data.message});   
             }
             else if(data.status === 200){
                 seterros({...errors,succeespassword:"Password is successfully changed"});
                 setpassowrd({oldpassword:'',newpassword:''});
                 seterros({oldpassword:'',samepassword:''});
               setTimeout(()=>{
                history.push('/dashboard');
               },3000)
             }
         })
        }
    }   
    return (
        
       
        <Card style={{width:'22rem',marginLeft:"32rem",marginTop:'10rem'}}>
        { errors.succeespassword !== null ? <p style={{color:'green',marginLeft:'5rem'}} >{errors.succeespassword} </p> : "" }
         <Input label={"Old Password"} placeholder={"Enter the Old pasword"}   type={"password"} onChange={oldpasswordhandler} />
       { errors.oldpassword !== null ? <p style={{color:'red',marginLeft:'5rem'}} >{errors.oldpassword} </p> : "" }
         <Input label={"Enter Password"} placeholder={"Enter the New pasword"} type={"password"} onChange={newpasswordhandler} />
         { errors.samepassword !== null ? <p style={{color:'red',marginLeft:'5rem'}} >{errors.samepassword} </p> : "" }
         <Button onClick={changepassword} > Change Password</Button>
        </Card>
        
    )
}

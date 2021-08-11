import React,{useState} from 'react';
import Button from '../Ui/Button';
import Caard from '../Ui/Card';
import Input from '../Ui/input';
import Style from './Login.module.css';
import {useHistory} from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const [state,setstate] = useState({
        email:'',
        password:'',
    })
    const [value,setvalue] = useState({
        loggedin:null,
        notloggedin:null
     
    })
    const setemail = (event)=>{
        setstate({...state,email:event.target.value});
    }
    const setpassword = (event)=>{
        setstate({...state,password:event.target.value});
    }
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(state)
    }
    const submit = async (event)=>{
       event.preventDefault();
       await fetch('http://localhost:4000/users/login',requestoptions)
       .then(response=> response.json())
       .then((data)=>{
        if(data.status===200){
            setvalue({loggedin:'Successfully log In wait for Dashboard'})
            localStorage.setItem('token',data.token);
            localStorage.setItem('username',data.username);
            setTimeout(() => {
                history.push('/dashboard');
            },3000);
        }
        else{
            setvalue({notloggedin:data.err.message});
        }
       })
    }
    return (
        <Caard className={Style.card}>
           {value.loggedin!=null?<p className={`${Style.success}`} >{value.loggedin}</p>:""}
           {value.notloggedin!=null?<p className={`${Style.failure}`} >{value.notloggedin}</p>:""}
            <h3 className={Style.login}>Login Page</h3>
            <Input label={"Email"} placeholder={"Enter the Email"} type={"email"} onChange={setemail} />
            <Input label={"Password"} placeholder={"Enter the password"} type={"password"} onChange={setpassword} />
            <Button onClick={submit} >Login</Button>
        </Caard>
    )
}

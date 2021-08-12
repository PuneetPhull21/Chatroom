import React,{useReducer} from 'react';
import Input  from '../Ui/input';
import Button from '../Ui/Button';
import {Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const initialvalue ={
    email:'',
    name:'',
    dob:'',
    password:'',
}
export default function Register() {
    const reducer = (state,action)=>{
        if(action.type === "inputemail"){
            return ({...state,email:action.value});
        }
        if(action.type === "inputname"){
            return ({...state,name:action.value})
        }
        if(action.type === "inputdob"){
            return ({...state,dob:action.value}) 
        }
        if(action.type === "inputpassword"){
            return ({...state,password:action.value})
        }
        return state;
    }
    const emailhandler = (event)=>{
        dispatch({type:'inputemail',value:event.target.value});
    }
    const namehandler = (event)=>{
        dispatch({type:'inputname',value:event.target.value})
    }

    const dobhandler = (event)=>{
        dispatch({type:'inputdob',value:event.target.value})
    }
    const passwordhandler = (event)=>{
        dispatch({type:'inputpassword',value:event.target.value})
    }
    const history = useHistory();
    const [value,dispatch] = useReducer(reducer,initialvalue);
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    }
    const submit = (event)=>{
        event.preventDefault();
        fetch('http://localhost:4000/users/add',requestoptions)
        .then(response=>response.json()).then((data)=>{
        console.log(data);
         history.push('/dashboard');
        })
    }
    return (
        <div>
            <Card style={{width:'21rem',marginLeft:'36rem',marginTop:'10rem'}}>
                <h1 style={{textAlign:'center'}} >Sign up</h1>
                <Input label={"Email"} placeholder={"Enter the Email"} type={"email"} onChange={emailhandler} />
                <Input label={"Name"} placeholder={"Enter the Name"} type={"text"} onChange={namehandler} />
                <Input label={"Date of birth"} placeholder={"Enter the DOB"} type={"text"} onChange={dobhandler} />
                <Input label={"Password"} placeholder={"Enter the Password"} type={"password"} onChange={passwordhandler}/>
                <Button onClick={submit} >Sign Up</Button>
            </Card>
        </div>
    )
}

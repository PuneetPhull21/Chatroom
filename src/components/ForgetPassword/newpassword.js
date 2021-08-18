import React,{useState} from 'react';
import {Card} from 'react-bootstrap';
import Input from '../Ui/input';
import Button from '../Ui/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Newpassword() {
    const {userid,token} = useParams();
    const history = useHistory();
    const [erros,seterros] = useState({
        failerror:null,
        passerror:null,
    });
    const [newpassword,setpassword] = useState();
    const onchangehangler =(event)=>{
        setpassword({...newpassword,newpassword:event.target.value});
    }
    const requestoptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(newpassword)
    }
    const changepassword = (event)=>{
        event.preventDefault();
        fetch(`http://localhost:4000/resetpassword/${userid}/${token}`,requestoptions)
        .then(response => response.json()).then((data)=>{
            if(data.status === 200){
              seterros({...erros,passerror:data.message});
              seterros({failerror:''});
              setTimeout(() => {
                  history.push('/login');
              },3000);
            }
            else if(data.status === 400){
                seterros({...erros,failerror:data.message});
            }
            
        })
    }
    return (
        <Card style={{width: "28rem",marginLeft:'32rem',marginTop:'13rem'}}>
          <h1 style={{marginLeft:"5rem",fontFamily:'cursive'}} >Reset Password</h1> 
          { erros.failerror!==null ? <h5 style={{color:'red',marginLeft:'8rem'}} >{erros.failerror}</h5>: ""}
          { erros.passerror!==null ? <h5 style={{color:'green',marginLeft:'8rem'}} >{erros.passerror}</h5>: ""}
          <Input label={"New Password"} placeholder={"Enter the Password"} type={"password"} onChange={onchangehangler}/>
          <Button onClick={changepassword} >Change</Button> 
        </Card>
    )
}

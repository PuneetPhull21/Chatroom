import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {io} from "socket.io-client";
import { Card, Button, InputGroup, FormControl} from "react-bootstrap";

const Chatroom = () => {
  const { roomname} = useParams();
  const {id} = useParams();
  const username = localStorage.getItem('username');
  const [message, setmessage] = useState("");
  const [oldchat,setchat] = useState([""]);
  const socket = io("http://localhost:4000", {
    query: {
      token:localStorage.getItem("token"),
    },
  })
  useEffect(()=>{
    socket.emit('ALL_CHAT',{id});
    socket.on("ALL_CHAT",(msg)=>{
      setchat(msg);
      
    })   
   // eslint-disable-next-line 
  },[])
   
  
  
  const smessage = (event) => {
    setmessage(event.target.value);
  };
  const senmessage = (event) => {
    event.preventDefault();
    if (message !== "") 
    socket.emit('NEW_MESSAGE',{username,message,id});
    setmessage("");
  };
  return (
    <Card style={{ width: "28rem", marginLeft: "32rem", marginTop: "7rem" }}>
      <Card.Body>
        <Card.Title>Messanger</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
         Open Chat Source
        </Card.Subtitle>
        <Card.Text>
          <Card>
            <Card.Title
              style={{
                textAlign: "center",
                backgroundColor: "white",
                fontFamily: "cursive",
              }}
            >
            {roomname}
            </Card.Title>
            <Card.Body style={{height:'19rem',overflow:'auto'}}>
         <ul >
         {oldchat.map((item,index) =>(  <li key={index} > <div
             className={`msg-container msg-container-${
               username === item.user ? 'right' : 'left'
             }`}
             key={index}
           >
             <div className="msg-header">
              <span	className="msg-user-name">      
                {item.user}
              </span>
             </div>
             <div className="msg-content">
               <span className="msg-text">
                 {item.msg}
               </span>
             </div>
           </div></li>))}
  </ul></Card.Body >
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Mesage"
                aria-label="Enter Message"
                aria-describedby="basic-addon2"
                onChange={smessage} 
                value={message}
              />
              <Button onClick={senmessage}>Send</Button>
            </InputGroup>
          </Card>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Chatroom;

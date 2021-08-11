import {Link,BrowserRouter as Router} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import {Card,Button} from 'react-bootstrap';

export default function Dashboard(){
  const [chatrooms,setchatrooms] = useState([]);
    const requestoption = {
        method: 'GET',
        headers: { 'authorization': `bearer ${localStorage.getItem('token')}` },
    }
    useEffect(() => {
        fetch('http://localhost:4000/chatroom',requestoption)
        .then(response=> response.json())
        .then((data)=>{
         setchatrooms(data.data);
        })
        //eslint-disable-next-line
    },[])
    return ( 
        <Card style={{width:'18rem',marginLeft:'37rem',marginTop:'12rem'}} >
        <Card.Header>Chatroom</Card.Header>
        <Card.Body>
          <Card.Title>All Chatroom</Card.Title>
          { chatrooms.length > 0 ? 
         chatrooms.map(items => <
           Card.Text key={items._id}> 
            {items.chatroom_name} 

         <Router>  <Link to={"/chatroom/"+items.chatroom_name+"/"+items._id}> <Button size="sm" style={{marginLeft:'9rem'}} >join</Button></Link> </Router>     
          </Card.Text> 
         )
         
          :
          "There is No Chatroom"
}
        </Card.Body>
      </Card>
              
    )
}

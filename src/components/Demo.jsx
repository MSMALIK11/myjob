
import React from 'react';
import io from 'socket.io-client';


const socket=io.connect("http://localhost:8000")
console.log('socket',socket)

const Demo=()=> {

 
  


    

    return (
      <div>Demo </div>
    )
  
}


export default Demo
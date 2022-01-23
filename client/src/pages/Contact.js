import React from 'react';
import {Form, Modal, Button} from 'react-bootstrap'
import "../components/Styles/Contact.css"


const Contact = () => {

const show = () => {
  return (
  <div>
    console.log("hi")
    <div> Trying to show something </div>
  </div>
  )
}
const button = () => {
  return (
<div>
  {show()}
</div>
  )
}

  return ( 
    <div>
      <button onClick={()=>button()}> Contact me </button>
    </div>
  );
};

export default Contact;
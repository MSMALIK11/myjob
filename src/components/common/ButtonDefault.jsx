import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Link, useNavigate } from 'react-router-dom';

const ButtonDefault = () => {
  const navigate=useNavigate()

  const handleRoute=()=>{
    navigate('/masking/demo')


  }
  return (
   
    <DefaultButton text="Cancle" onClick={handleRoute} />
  
  )
}

export default ButtonDefault
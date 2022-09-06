import React from 'react';
import {PrimaryButton } from '@fluentui/react';
import {useNavigate } from 'react-router-dom';
const ButtonPrimary = () => {
  const navigate=useNavigate()
  const handleCardRoute=()=>{
    navigate('/masking/datastore')


  }
  
  return (

    <PrimaryButton text="Next" className="primary-btn"  onClick={handleCardRoute}  />
  
  )
}

export default ButtonPrimary
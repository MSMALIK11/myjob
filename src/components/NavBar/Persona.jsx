import React from 'react';

import {
    Persona,
    PersonaSize,
    PersonaPresence,
  } from "@fluentui/react";


const PersonaProfile = ({examplePersona}) => {

   
  return (
    <Persona
    {...examplePersona}
    size={PersonaSize.size32}
    presence={PersonaPresence.online}
    imageAlt="Annie Lindqvist, status is away"
  />
  )
}

export default PersonaProfile
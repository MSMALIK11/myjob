import React from 'react';
import { Label } from '@fluentui/react';
import { TextField } from '@fluentui/react';
const TextBox = ({placeText,label}) => {
  return (
<>
<Label htmlFor={"textFieldId"} className="label">{label}</Label>
      <TextField id={"textFieldId"} placeholder={placeText} className="width" />
      
      </>
  )
}

export default TextBox
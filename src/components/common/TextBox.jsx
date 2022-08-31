import React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
const TextBox = ({placeText,label}) => {
  return (
<>
<Label htmlFor={"textFieldId"} className="label">{label}</Label>
      <TextField id={"textFieldId"} placeholder={placeText} className="width" />
      
      </>
  )
}

export default TextBox
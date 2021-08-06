import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import { pushMessage } from '../firebase';

const MessageField = ({name, setText, text }) => {
  const [isComposed, setIsCmposed] = useState(false);
  return ( 
    <TextField 
      fullWidth={true} 
      onChange={(e) => setText(e.target.value) }
      onKeyDown={(e) => {
        if (isComposed) return;
        
        const text = e.target.value;
        if (text === "") return;

        if (e.key === 'Enter') {
          pushMessage({ name: 'ww', text})
          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsCmposed(true)}
      onCompositionEnd={() => setIsCmposed(false)}
      value={text}
      /> 
  );
};

export default MessageField;
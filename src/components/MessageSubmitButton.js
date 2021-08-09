import React from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Send'

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, setText, text}) => {
  return (
    <IconButton disabled={text === ''} onClick={() => {
      pushMessage({name, text});
      setText('');
    }}>
      <DeleteIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
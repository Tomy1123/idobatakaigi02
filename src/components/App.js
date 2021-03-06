import React, { useState } from 'react';
import SignIn from './SignIn';
import Main from '../components/Main';
import config from '../config.json'

export default () => {
  const [name, setName] = useState("");

  if (config.signInEnabled && name === '' ) {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />
  }
};

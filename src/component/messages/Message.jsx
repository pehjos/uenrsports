import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './message.css'

function Message({type,description,name,email,phone}) {
  return (
    <div className='message'>
<Stack sx={{ width: '100%' }} spacing={2} >
    
      <Alert severity="success">
        <AlertTitle>{type}</AlertTitle>
       {description}
       <p>{name}</p>
       <p>{email}</p>
       <p>{phone}</p>
      </Alert>
    </Stack>    

    </div>
  )
}

export default Message
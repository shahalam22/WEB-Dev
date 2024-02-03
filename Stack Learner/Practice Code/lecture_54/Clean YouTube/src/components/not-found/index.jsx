import * as React from 'react';
import { Container} from '@mui/material';
import { Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Container maxWidth={'lg'} sx={{py: 16, height: '600px', backgroundColor: '#333333', color: 'white'}}>
            <Typography variant='h2' align='center'>404! Page Not Found</Typography>        
        </Container>
    )
}

export default NotFound;
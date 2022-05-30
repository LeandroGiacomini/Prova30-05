import React from 'react';
import Button from '@mui/material/Button';


const BotaoReg = ({button}) => {
    return (<Button className='botao' variant='outlined'
    onClick={
        () => {}
    }
    size='large'

    >{button}</Button> );
}
 
export default BotaoReg;
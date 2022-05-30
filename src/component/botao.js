import * as React from 'react';
import Button from '@mui/material/Button';

const Botao = ({button}) => {
    return ( <Button className='botao' variant='outlined' color='success' 
    onClick={
        () => {}
    }
    size='large'

    >{button}</Button> );
}


export default Botao;


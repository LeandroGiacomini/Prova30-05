import React from 'react';
import Botao from '../component/botao';
import BotaoReg from '../component/botaoReg';
import Contato from '../component/contato';
const Navbar = () => {
    return ( 
    <>
        <nav className='nav'>
            <div className='h1'>
                <h1>Alugue now</h1>
            </div>
            <Contato button = 'Contato'/>
            <BotaoReg button = 'Registrar'/>
            <Botao button = 'Login' />
            
        </nav>
    </> 
    );
}
 
export default Navbar;
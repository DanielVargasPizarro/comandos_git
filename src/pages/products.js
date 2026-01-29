import react from 'react';
import NavBarPrincipal from '../components/navbar';
import Bienvenida from '../components/bienvenida';

function Productos() {
    return (
        <div>
            <NavBarPrincipal />
            <div className='container mt-4'>
            <Bienvenida/>
            </div>
        </div>
    );
}

export default Productos;
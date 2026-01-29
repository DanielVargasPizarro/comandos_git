import react from 'react';
import CarouselPrincipal from './card';
import CardProducto from './card';

function Bienvenida() {

    return (
        <div>
            <div className='row'>
                <div className='col-xl-12'>
                    <h2 className='text-center'>Productos</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Bolsa reutilizable' desc='100% algodon organico' ruta='/images/Bolsa.jpg' />
                </div>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Cepillo bambú' desc='Suave y biodegradable' ruta='/images/cepillo.jpg' />
                </div>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Jabón natural' desc='Sin quimicos agresivos' ruta='/images/jabon.jpg' />
                </div>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Botella térmica' desc='Mantiene el calor por hasta 24 horas' ruta='/images/botella.jpg' />
                </div>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Detergente Eco' desc='Libre de Fosfatos' ruta='/images/detergente.jpg' />
                </div>
                <div className='col-xl-4 my-3'>
                    <CardProducto titulo='Set Bombillas' desc='Acero inoxidable' ruta='/images/acero.jpg' />
                </div>
            </div>
        </div>
    );
}
export default Bienvenida;
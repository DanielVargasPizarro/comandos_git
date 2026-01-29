import react from 'react';

function CardProducto(props) {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.ruta} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-success">Ver más</a>
            </div>
        </div>
    );
}

export default CardProducto;
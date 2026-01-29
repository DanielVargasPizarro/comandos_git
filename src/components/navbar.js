import react from 'react';

function NavBarPrincipal() {

    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src='/images/logotipo.avif' style={{width: '50px'}}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/productos">Productos</a></li>
                                <li><a className="dropdown-item" href="/contact">Contacto</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBarPrincipal;
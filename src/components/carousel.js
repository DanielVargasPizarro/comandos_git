import react from 'react';

function CarouselPrincipal() {

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/slide-1.jpg" className="d-block w-100" alt="Slide" />
                </div>
                <div className="carousel-item">
                    <img src="/images/slide-2.jpg" className="d-block w-100" alt="Slide" />
                </div>
                <div className="carousel-item">
                    <img src="/images/slide-3.jpg" className="d-block w-100" alt="Slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default CarouselPrincipal;
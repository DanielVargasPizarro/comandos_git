import react from 'react';
import Bienvenida from '../components/bienvenida';
import NavBarPrincipal from '../components/navbar';
import CarouselPrincipal from '../components/carousel';
import Footer from '../components/footer';
function Home() {
    return (
        <div>
            <NavBarPrincipal />
            <CarouselPrincipal />
            <div className='container'>
                <Bienvenida />
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
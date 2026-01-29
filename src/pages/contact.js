import React from "react";
import Contacto from "../components/contacto";
import NavBarPrincipal from "../components/navbar";
import Footer from "../components/footer";
function Contact() {
    return (
        <div>
            <NavBarPrincipal />
            <div className="container">
                <Contacto />
            </div>
            <Footer />
        </div>
    );
}
export default Contact;
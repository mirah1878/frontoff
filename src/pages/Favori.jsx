import React from "react";
import Favoris from "../components/Favoris";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Favori = () => {
    return(
        <>
            <div>
                <Navbar />
                <Favoris />
                <Footer />
            </div>
        </>
    );
};

export default Favori;
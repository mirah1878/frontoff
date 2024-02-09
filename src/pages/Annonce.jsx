import React from "react";
import Footer from "../components/Footer";
import ListAnnonce from "../components/ListAnnonce";
import Navbar from "../components/Navbar";

const Annonce = () => {
    return(
        <>
            <div>
                <Navbar />
                <ListAnnonce />
                <Footer />
            </div>
        </>
    );
};

export default Annonce;
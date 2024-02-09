import React from "react";
import Footer from "../components/Footer";
import Log from "../components/Log";
import Navbar from "../components/Navbar";

const Login = () => {
    return(
        <>
            <div>
                <Navbar />
                <Log />
                <Footer />
            </div>
        </>
    );
};

export default Login;
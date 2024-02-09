import React from "react";
import Chat from "../components/Chat";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Message = () => {
    return(
        <>
            <div>
                <Navbar />
                <Chat />
                <Footer />
            </div>
        </>
    );
};

export default Message;
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface StandardLayoutProps {
    children: React.ReactNode;
}

function Layout(props: StandardLayoutProps) {
    return (
        <>
            <>
                <Navbar />
                <div>
                    {props.children}
                </div>
                <Footer />
            </>
        </>
    )
}
export default Layout;
import React from 'react';
import Navbar from '../Navbar/Navbar';

export function Layout(props){
    return (
        <div>
            <Navbar />
            {/* <Sidebar /> */}
            {props.children}
            {/* <Footer /> */}
        </div>
    )
}
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>TRAVEL WITH PASSION & LIVE YOUR LIFE LIKE A BIRD</h2>
            <h3>Tesla'S Travels</h3>
            <h3>Total: 120 MILION</h3>
            <nav>
            <a href="/Location">Location</a>
            <a href="/Site">Site</a>
            <a href="/About US">About Us</a>
            </nav>
        </div>
        
    );
};

export default Header;
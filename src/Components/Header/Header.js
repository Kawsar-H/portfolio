import React from 'react';
import Jump from 'react-reveal/Jump';
import Typical from 'react-typical'
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './Header.css'
const Header = () => {
    const expertise=["I am ",2000, "I am Front End Developer",5000, "I am Quality Coder",5000, "I am a Learner from any documentation",5000]
    return (
        <div className="main-header-container">
            <HeaderNavbar></HeaderNavbar>
            <div className='header-container mt-5'>
                <div className="header-title">
                    <Jump >
                        <h1 className="my-name">Kawsar Hossain</h1>
                    </Jump>
                    <Typical className="text-white my-expertise"
                        steps={expertise}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
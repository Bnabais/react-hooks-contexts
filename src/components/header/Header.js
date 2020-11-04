import React from 'react';

// Hooks
import { useHeaderContext } from '../../hooks/HeaderContext';

// Styles
import './Header.css';

function Header() {
    const { headerColorState } = useHeaderContext();

    return (
        <div style={{backgroundColor: `${headerColorState}`}} className='header'>
            <img className="header-img" alt="Present Technologies" src="https://www.present-technologies.com/wp-content/uploads/2018/07/logo-present-3.png" />
            <p className='center-div'>React Hooks and Contexts</p>
        </div>
    );
}

export default Header;

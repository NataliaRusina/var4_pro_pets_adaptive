import React from 'react';
import styles from '../../css_modules/header_green.module.css';
import logoWhite from '../../images/group_87.png';

const Header_green = () => {
    return (
        <div className='jumbotron-fluid m-0'>
            <div className={`container-fluid d-inline-flex flex-wrap align-items-center justify-content-around pt-4 pb-4
                 ${styles.headerGreen}
            `}>
                <img src={logoWhite} className='img-fluid col-7 col-md-5 col-lg-2'/>
                {/*<div className='col-0 col-md-1 col-lg-7'/>*/}
                <button className={`col-4 col-md-3 col-lg-1 ${styles.signInButton}`}>Sign in</button>

            </div>

        </div>
    );
};

export default Header_green;
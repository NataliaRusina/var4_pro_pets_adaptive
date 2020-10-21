import React from 'react';
import styles from '../../css_modules/header_green.module.css';
import logoWhite from '../../images/group_87.png';
import Left_side_bar_expanded from "./Left_side_bar_expanded";

const Header_green = () => {



    // const openNav = () => {
    //     document.getElementById("mySidenav").style.width = "250px";
    // }
    //
    // const closeNav = () => {
    //     document.getElementById("mySidenav").style.width = "0";
    // }


    return (
        <div className='jumbotron-fluid m-0'>
            <div className={`container-fluid col-12 d-inline-flex flex-wrap align-items-center justify-content-around 
            pt-4 pb-4
                 ${styles.headerGreen}
            `}>
                <div className={`d-flex align-items-stretch fa fa-bars col-3 d-md-none my-0 
                ${styles.bars}`}
                     // onClick={() => openNav()}
                />

                {/*<div id="mySidenav" className='${styles.sidenav} col-lg-3 m-0 p-0'>*/}
                {/*    <a href="javascript:void(0)" className={`${styles.closebtn}`} onClick={()=> closeNav()}>X</a>*/}
                {/*    <Left_side_bar_expanded/>*/}
                {/*</div>*/}

                <img src={logoWhite} className='img-fluid col-7 col-sm-5 col-lg-3'/>
                {/*<div className='col-0 col-sm-1 col-lg-7'/>*/}
                <button className={`d-none d-md-flex justify-content-center align-items-center  col-4 col-sm-3 col-lg-2 
                ${styles.signInButton}`}>Sign in</button>

            </div>

        </div>
    );
};

export default Header_green;
import React from 'react';
import Header_green from "../2_nd_level/Header_green";
import Start_main_block from "../2_nd_level/Start_main_block";
import Footer from "../2_nd_level/Footer";
import styles from "../../css_modules/sign_in.module.css";
import SignInFrontal from "../2_nd_level/Sign_in_frontal";

const Start_page = () => {

    return (
        //================================================================== START PAGE =================================

        <div className='d-flex flex-wrap justify-content-center'>
            <div>
                <Header_green/>
                <Start_main_block/>
                <Footer/>
            </div>
            <div className={`col-10 col-md-8 col-lg-6 ${styles.front} ${styles.no_display}`}>
                <SignInFrontal/>
            </div>
        </div>


        );
};

export default Start_page;
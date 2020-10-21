import React from 'react';
import Header_green from "../2_nd_level/Header_green";
import Start_main_block from "../2_nd_level/Start_main_block";
import Footer from "../2_nd_level/Footer";
import styles from "../../css_modules/sign_in.module.css";
import SignInFrontal from "../2_nd_level/Sign_in_frontal";

const SignInSignUp = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className={`${styles.back}`}>
                <Header_green/>
                <Start_main_block/>
                <Footer/>
            </div>
            <div className={`col-12 col-sm-10 col-lg-6 m-0 mt-2 mt-sm-5 ${styles.front} ${styles.display}`}>
                <SignInFrontal/>
            </div>
        </div>
    );
};

export default SignInSignUp;
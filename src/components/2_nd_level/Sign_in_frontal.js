import React from 'react';
import styles from "../../css_modules/sign_in.module.css"
import Sign_up_form from "../3_rd_level/Sign_up_form";
import Sign_in_form from "../3_rd_level/Sign_in_form";
import logoWhite from '../../images/group_87.png';

const SignInFrontal = () => {
    return (
        <div className={`d-flex flex-wrap flex-column justify-content-start p-0 pb-2 p-md-2 ${styles.frontal}`}>

            <div className={`row d-flex flex-wrap justify-content-between align-content-around m-0 mt-1 mb-1 ${styles.sign_in_1}`}>
                <div className='col-6'>
                    <img src={logoWhite} className={`img-fluid mt-3 ${styles.logoWhite}`}/>

                </div>
                <div className='h-2 mt-1'>
                    <button className='mt-2'><strong>X</strong></button>
                </div>
            </div>

            <div className={`row p-1 h-2 d-flex flex-wrap align-content-around justify-content-around 
            m-2  ${styles.sign_in_2}`}>
                <div className={`col-12 col-md-7 ml-3 pl-2 ${styles.welcome}`}>
                    <strong>Welcome!</strong> Please sign in / sign up to continue or
                </div>
                <button
                    className={`col-8 col-md-4 m-1 p-0 d-flex flex-wrap align-content-center justify-content-around 
                    fa fa-facebook fa-1x  ${styles.fb_enter}`}>
                    Enter with Facebook
                </button>
            </div>

            <div className={`d-flex flex-wrap col-12 justify-content-center ${styles.sign_in_3}`}>
                <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2 p-0`}>
                    <button className={`col-6 m-0 ${styles.but_1} ${styles.active}`}>Sign up</button>
                    <button className={`col-6 m-0 ${styles.but_2} ${styles.passive}`}>Sign in</button>
                </div>

                {/*<Sign_in_form/>*/}
                <Sign_up_form/>

            </div>

            <div className={`row d-flex flex-wrap align-items-end justify-content-around ${styles.sign_in_4}`}>
                <div className={`col-12 col-sm-5 ml-2 mb-2 ${styles.last_text}`}>By clicking “Submit”,
                    you agree to us processing your <br/>
                    information in accordance with <button><u>these terms</u></button>.
                </div>
                <button className={`col-8 col-sm-2 mt-1 ${styles.cancel}`}>Cancel</button>
                <button className={`col-8 col-sm-3 mt-1 d-flex flex-wrap align-content-center 
                justify-content-around fa fa-paw ${styles.submit}`}>Submit</button>

            </div>
        </div>
    );
};

export default SignInFrontal;
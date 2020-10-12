import React from 'react';
import styles from "../../css_modules/sign_in.module.css"
import Sign_in_form from "../3_rd_level/Sign_in_form";
import Sign_up_form from "../3_rd_level/Sign_up_form";

const SignInFrontal = () => {
    return (
        <div className={`d-flex flex-wrap flex-column justify-content-start ${styles.frontal}`}>

            <div className={`row d-flex flex-wrap justify-content-between align-content-around ${styles.sign_in_1}`}>
                <div className='col-6'>
                    <h1 className={`${styles.greenLogo}`}>Pr
                        <i className="fa fa-search"/>
                        PETS</h1>
                </div>
                <div className='h-2 mt-1'>
                    <button><strong>X</strong></button>
                </div>
            </div>

            <div className={`row p-1 h-2 d-flex flex-wrap align-content-around justify-content-around ${styles.sign_in_2}`}>
                <div className={`col-7 p-1 ${styles.welcome}`}>
                    <strong>Welcome!</strong> Please sign in / sign up to continue or
                </div>
                <button
                    className={`col-4 m-1 p-0 d-flex flex-wrap align-content-center justify-content-around ${styles.fb_enter}`}>
                    <i className={`align-self-center justify-self-center fa fa-facebook fa-1x 
                    ${styles.fb_icon}`}/>Enter with Facebook
                </button>
            </div>

            <div className={`d-flex flex-wrap col-12 justify-content-center ${styles.sign_in_3}`}>
                <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center mb-2`}>
                    <button className={`col-6 ${styles.but_1} ${styles.active}`}>Sign up</button>
                    <button className={`col-6 ${styles.but_2} ${styles.passive}`}>Sign in</button>
                </div>

                {/*<Sign_in_form/>*/}
                <Sign_up_form/>

            </div>

            <div className={`row d-flex flex-wrap align-items-end justify-content-around ${styles.sign_in_4}`}>
                <div className={`col-12 col-md-5 ${styles.last_text}`}>By clicking “Submit”, you agree to us processing your <br/>
                    information in accordance with <button><u>these terms</u></button>.
                </div>
                <button className={`col-4 col-md-2 ${styles.cancel}`}>Cancel</button>
                <button className={`col-6 col-md-3 d-flex flex-wrap align-content-center justify-content-around ${styles.submit}`}><i className={`fa fa-paw ${styles.paw}`}/> Submit</button>

            </div>
        </div>
    );
};

export default SignInFrontal;
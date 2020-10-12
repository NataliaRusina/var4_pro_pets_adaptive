import React from 'react';
import styles from "../../css_modules/confirmation.module.css";
import BeforePost from "../5_th_level/Before_post";

const ConfirmationDraft = () => {
    return (
        <div className={`container-fluid d-flex flex-wrap`}>
            <BeforePost/>

            <p className={`${styles.fingers_crossed}`}>
                Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two
                weeks. To make it active again follow the instructions you’ll get in email.
            </p>
            <div className={`col-4`}>
                <input type='checkbox' id='share_to_fb'/>
                <label htmlFor='share_to_fb' className={`${styles.share_label}`}>Share to Facebook</label>
            </div>
            <div className={`col-8 d-flex flex-wrap justify-content-end`}>
                <button className={` p-0 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.confirm_edit_button}`}>
                    <i className="fa fa-edit"/>Edit
                </button>

                <button className={` p-0 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.confirm_publ_button}`}>
                    <i className="fa fa-paw"/>Publish
                </button>
            </div>
            <p className={`pt-3 container d-flex flex-wrap justify-content-end ${styles.confirm_last_info}`}>By clicking
                “Publish”, you agree to us processing your information in accordance with these terms.</p>

        </div>

    )
};

export default ConfirmationDraft;
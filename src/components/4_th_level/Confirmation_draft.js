import React from 'react';
import styles from "../../css_modules/confirmation.module.css";
import BeforePost from "../5_th_level/Before_post";

const ConfirmationDraft = () => {
    return (
        <div className={`container-fluid d-flex flex-wrap p-0 m-0 justify-content-center`}>
            <BeforePost/>

            <p className={`${styles.fingers_crossed} col-12 px-0 py-2 m-0`}>
                Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two
                weeks. To make it active again follow the instructions you’ll get in email.
            </p>
            <div className={`col-sm-12 col-md-4`}>
                <input type='checkbox' id='share_to_fb'/>
                <label htmlFor='share_to_fb' className={`${styles.share_label}`}>Share to Facebook</label>
            </div>
            <div className={`container-fluid row col-sm-12 col-md-8 d-flex flex-wrap justify-content-end`}>
                <button className={`col-5 col-md-3 m-1 p-0 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.confirm_edit_button}`}>
                    <i className="fa fa-edit"/>Edit
                </button>

                <button className={`col-6 col-md-4 m-1 p-0 d-flex flex-wrap justify-content-around align-content-center 
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
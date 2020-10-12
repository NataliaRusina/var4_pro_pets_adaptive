import React from 'react';
import styles from "../../css_modules/profile.module.css";
import BeforePost from "../5_th_level/Before_post";

const DeactivatedPost = () => {
    return (
        <div className='container-fluid p-0 m-0'>
            <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2`}>
                <button className={`jumbotron-fluid col-12 m-0 p-0 ${styles.but_deactivate} ${styles.active}`}>
                    The post was deactivated on 12 Dec, 2019. Click here to re-activate it.
                </button>

            </div>
            <div className={`${styles.deactivated}`}>
                <BeforePost/>
            </div>

        </div>
    );
};

export default DeactivatedPost;
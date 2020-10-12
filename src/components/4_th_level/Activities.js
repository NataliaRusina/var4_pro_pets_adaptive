import React from 'react';
import styles from "../../css_modules/profile.module.css";
import BeforePost from "../5_th_level/Before_post";

const Activities = () => {
    return (
        <div className='container-fluid p-0 m-0'>
            <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2`}>
                <button className={`jumbotron-fluid col-6 m-0 p-0 ${styles.but_1} ${styles.passive}`}>My profile</button>
                <button className={`jumbotron-fluid col-6 m-0 p-0 ${styles.but_2} ${styles.active}`}>Activities</button>
            </div>
            <BeforePost/>
        </div>
    );
};

export default Activities;
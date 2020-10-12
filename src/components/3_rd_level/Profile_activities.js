import React from 'react';
import styles from "../../css_modules/content.module.css";
import {your_profile_head} from "../../utils/Constants";
import Activities from "../4_th_level/Activities";

const ProfileActivities = () => {
    return (
        <div className='container-fluid m-0'>
            <div className={`${styles.board_header}`}>
                <h5>{your_profile_head}</h5>
            </div>
            <div className='container-fluid m-0 p-0'>
                <Activities/>


            </div>
        </div>
    );
};

export default ProfileActivities;
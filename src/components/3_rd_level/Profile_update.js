import React from 'react';
import {your_profile_head} from "../../utils/Constants"
import styles from "../../css_modules/content.module.css";
import Update from "../4_th_level/Update";



const Profile_update = () => {
    return (
        <div className='container-fluid m-0'>
            <div className={`${styles.board_header}`}>
                <h5>{your_profile_head}</h5>
            </div>
            <div className='container-fluid m-0 p-0'>
                <Update/>

            </div>
        </div>
    );
};

export default Profile_update;
import React from 'react';
import styles from "../../css_modules/content.module.css";
import Adding_new_lost from "../3_rd_level/Adding_new_lost";
import Adding_new_found from "../3_rd_level/Adding_new_found";
import Services_hotels from "../3_rd_level/Services_hotels";
import Services_fostering from "../3_rd_level/Services_fostering";
import Services_walking from "../3_rd_level/Services_walking";
import Services_vet_help from "../3_rd_level/Services_vet_help";
import Favorites from "../3_rd_level/Favorites";
import Adding_new_post from "../3_rd_level/Adding_new_post";
import ConfirmationPost from "../3_rd_level/Confirmation_post";
import Profile_update from "../3_rd_level/Profile_update";
import Profile_activities from "../3_rd_level/Profile_activities";
import Profile_deactivated from "../3_rd_level/Profile_deactivated";


const Content = () => {
    return (
        <div className={`container d-flex flex-wrap column align-content-start justify-content-center m-0 mt-2 p-3 
        ${styles.content}`}>
            <Adding_new_lost/>
            <Adding_new_found/>
            <Services_hotels/>
            <Services_fostering/>
            <Services_walking/>
            <Services_vet_help/>
            <Favorites/>
            <Adding_new_post/>
            <ConfirmationPost/>
            <Profile_update/>
            <Profile_activities/>
            <Profile_deactivated/>
        </div>

    );
};

export default Content;
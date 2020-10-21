import React from 'react';
import styles from "../../css_modules/content.module.css";
import {fostering_head} from "../../utils/Constants";
import ServicePost from "../4_th_level/Service_post";

const Services_fostering = () => {
    return (
        <div className={`container-fluid`}>
            <div className={`${styles.board_header}`}>
                <h5>{fostering_head}</h5>
            </div>
            <div>
                <ServicePost/>
            </div>
        </div>
    );
};

export default Services_fostering;
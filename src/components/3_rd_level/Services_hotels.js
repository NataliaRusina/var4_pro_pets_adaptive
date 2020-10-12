import React from 'react';
import {hotels_head} from '../../utils/Constants'
import styles from "../../css_modules/content.module.css";
import ServicePost from "../4_th_level/Service_post";

const ServicesHotels = () => {
    return (
        <div>
            <div className={`${styles.board_header}`}>
                <h5>{hotels_head}</h5>
            </div>
            <div>
                <ServicePost/>
            </div>
        </div>
    );
};

export default ServicesHotels;
import React from 'react';
import styles from "../../css_modules/content.module.css";
import {favorites_head} from "../../utils/Constants";
import ServicePost from "../4_th_level/Service_post";

const Favorites = () => {
    return (
        <div>
            <div className={`${styles.board_header}`}>
                <h5>{favorites_head}</h5>
            </div>
            <div>
                <ServicePost/>
            </div>
        </div>
    );
};

export default Favorites;
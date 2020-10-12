import React from 'react';
import styles from "../../css_modules/content.module.css";
import {found_head} from "../../utils/Constants";
import Lost_found_draft from "../4_th_level/Lost_found_draft";

const AddingNewFound = () => {
    return (
        <div>
            <div className={`${styles.board_header}`}>
                <h5>{found_head}</h5>
            </div>
            <Lost_found_draft/>
        </div>
    );
};

export default AddingNewFound;
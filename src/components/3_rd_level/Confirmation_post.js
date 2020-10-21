import React from 'react';
import styles from "../../css_modules/content.module.css";
import {preview_head} from "../../utils/Constants";
import ConfirmationDraft from "../4_th_level/Confirmation_draft";

const ConfirmationPost = () => {
    return (
        <div className='container-fluid'>
            <div className={`${styles.board_header}`}>
                <h5>{preview_head}</h5>
            </div>
            <div>
                <ConfirmationDraft/>
            </div>

        </div>
    );
};

export default ConfirmationPost;
import React from 'react';
import styles from "../../css_modules/content.module.css";
import {new_post} from "../../utils/Constants";
import NewPost from "../4_th_level/New_post";

const AddingNewPost = () => {
    return (
        <div className='container-fluid'>
            <div className={`${styles.board_header}`}>
                <h5>{new_post}</h5>
            </div>
            <div>
                <NewPost/>
            </div>
        </div>
    );
};

export default AddingNewPost;
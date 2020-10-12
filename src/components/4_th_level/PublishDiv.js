import React from 'react';
import styles from "../../css_modules/publish_div.module.css";

const PublishDiv = () => {
    return (
        <div className='row'>
            <div
                className={`${styles.publish_div_left} col-6 d-flex flex-wrap justify-content-start align-content-center mt-0 pt-0`}>
                <img src='https://www.gravatar.com/avatar/0?d=mp' alt='avatar' className={`mt-0 pt-0 ${styles.user_photo}`}/>
                <div className={`col-8 mt-0 pt-0 ${styles.user_name} justify-content-center`}><strong>Anna
                    Smith</strong></div>
            </div>
            <div className={`${styles.publish_div_right} col-6 d-flex flex-wrap justify-content-end`}>
                <button className='m-0 p-0 d-flex flex-wrap justify-content-around align-content-center'>
                    <i className="fa fa-paw"/>Publish
                </button>
            </div>
        </div>
    );
};

export default PublishDiv;
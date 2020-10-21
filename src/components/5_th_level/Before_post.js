import React from 'react';
import styles from "../../css_modules/before_post.module.css";
import pic_conf from "../../images/dog_hat_small.png";

const BeforePost = () => {
    return (
        <div className='container-fluid col-12 m-0 d-flex flex-wrap justify-content-center'>

            <div className={`${styles.empty_board} row container-fluid d-flex flex-wrap justify-content-between 
            m-0 p-2 col-12`}>

                <div className={`container-fluid row col-12 justify-content-between m-0 p-0 pb-2`}>
                    <h4 className={`offset-1 col-9 m-0 p-0 d-flex flex-wrap justify-content-center ${styles.postName}`}>Dog, Golden Retriever</h4>
                    <div className='row m-0'>
                        <button
                            className={`fa fa-pencil d-flex justify-content-center align-items-end mx-1 ${styles.upd_button} 
                        ${styles.no_display}`}/>
                        <button
                            className={`fa fa-trash d-flex justify-content-center align-items-end mx-1 ${styles.upd_button} 
                            ${styles.no_display}`}/>
                    </div>

                </div>

                <div className={`col-sm-12 col-md-5 m-0 p-0 ${styles.confirm_photo_div}`}>
                    <img src={pic_conf} className='col-12 p-0 m-0'/>
                </div>
                <div className={`col-sm-12 col-md-7 p-0 pl-2 m-0 container-fluid justify-content-center ${styles.confirm_info_div}`}>


                    <div className='col-12 row p-0 m-0 mt-3 justify-content-center'>
                        <div className={`container-fluid justify-content-start col-sm-12 col-md-6 p-0 m-0`}>
                            <div className='container row m-0 p-0'>
                                Color: <div className={`${styles.share_label}`}> golden</div>
                            </div>
                            <div className='container row m-0 p-0'>
                                Sex: <div className={`${styles.share_label}`}> male</div>
                            </div>
                            <div className='container row m-0 p-0'>
                                Height: <div className={`${styles.share_label}`}> 45 cm</div>
                            </div>
                        </div>
                        <div className={`container col-sm-12 col-md-6 p-0`}>
                            Distinctive features:
                            <div className={`${styles.share_label} p-0 m-0`}> blue collar with stars, no left ear, damaged
                                tail.</div>
                        </div>
                    </div>
                    <div className={`col-12 p-0 m-0 mt-2`}>
                        Description:
                        <div className={`${styles.share_label} p-0 m-0`}> brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
                            graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</div>
                    </div>
                    <div className='container mt-3 border-top pt-2'>
                        <p className={`col-12 fa fa-map-marker ${styles.share_label}`}> Florentin, 27, Tel Aviv</p>
                        <div className='col-12 m-0 p-0 row'>
                            <div className={`col-6 ${styles.confirm_div_left} col-6 d-flex flex-wrap justify-content-start 
                            align-content-center mt-0 p-0`}>
                                <img src='https://www.gravatar.com/avatar/0?d=mp'
                                     className={`mt-0 pt-0 ${styles.user_photo}`}/>
                                <div className={`col-8 mt-0 p-0 pl-1 ${styles.user_name} justify-content-center`}>
                                    <strong> John Goodboi</strong> <br/> Dec 12, 2019
                                </div>
                            </div>
                            <div className={`row justify-content-end align-items-end  col-6 p-0 m-0`}>
                                <button
                                    className={`fa fa-phone d-flex justify-content-center align-items-end mx-1 ${styles.confirm_contact_button}`}/>
                                <button
                                    className={`fa fa-envelope d-flex justify-content-center align-items-end mx-1 ${styles.confirm_contact_button}`}/>
                                <button
                                    className={`fa fa-facebook-f d-flex justify-content-center align-items-end mx-1 ${styles.confirm_contact_button}`}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BeforePost;
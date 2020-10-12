import React from 'react';
import styles from "../../css_modules/before_post.module.css";
import pic_conf from "../../images/dog_hat_big.png";

const BeforePost = () => {
    return (
        <div>
            <div className={`${styles.empty_board} row container-fluid d-flex flex-wrap`}>
                <div className={`col-5 m-0 p-0 ${styles.confirm_photo_div}`}>
                    <img src={pic_conf}/>
                </div>
                <div className={`col-7 p-0 m-0 container-fluid justify-content-center ${styles.confirm_info_div}`}>
                    <div className='container-fluid row justify-content-around m-0 p-0'>
                        <strong className={`col-9 m-0 p-0 ${styles.postName}`}>Dog, Golden Retriever</strong>
                        <button
                            className={`fa fa-pencil d-flex justify-content-center align-items-end m-0 ${styles.upd_button} 
                        ${styles.no_display}`}/>
                        <button
                            className={`fa fa-trash d-flex justify-content-center align-items-end m-0 ${styles.upd_button} 
                            ${styles.no_display}`}/>
                    </div>

                    <div className='col-12 row p-0 m-0 mt-3 justify-content-center'>
                        <div className={`container-fluid justify-content-start col-6 p-0 m-0`}>
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
                        <div className={`container col-6 p-0`}>
                            Distinctive features:
                            <div className={`${styles.share_label}`}> blue collar with stars, no left ear, damaged
                                tail.</div>
                        </div>
                    </div>
                    <div className={`col-12 p-0 m-0 mt-2`}>
                        Description: brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
                        graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
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
                                    className={`fa fa-phone d-flex justify-content-center align-items-end ${styles.confirm_contact_button}`}/>
                                <button
                                    className={`fa fa-envelope d-flex justify-content-center align-items-end ${styles.confirm_contact_button}`}/>
                                <button
                                    className={`fa fa-facebook-f d-flex justify-content-center align-items-end ${styles.confirm_contact_button}`}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BeforePost;
import React from 'react';
import styles from "../../css_modules/profile.module.css";

const ProfileUpdate = () => {
    return (
        <div className='container-fluid p-0 m-0'>
            <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2`}>
                <button className={`jumbotron-fluid col-6 m-0 p-0 ${styles.but_1} ${styles.active}`}>My profile</button>
                <button className={`jumbotron-fluid col-6 m-0 p-0 ${styles.but_2} ${styles.passive}`}>Activities
                </button>
            </div>
            <div className={`col-12 d-flex flex-wrap justify-content-start pb-5 ${styles.empty_board}`}>
                <div className={`col-6 d-flex flex-wrap justify-content-start align-content-center mt-0 pt-0`}>
                    <div className={`${styles.upd_photo_div} d-flex flex-wrap align-content-center`}>
                        <img src='https://www.gravatar.com/avatar/0?d=mp'
                             className={`mt-0 pt-0 ${styles.profile_user_photo}`}/>
                        <button
                            className={`fa fa-camera d-flex justify-content-center align-items-center m-0 
                            ${styles.upd_photo_button}`}/>

                    </div>
                    <div className={`col-8 mt-0 pt-0 ${styles.profile_user_name}`}><strong>Anna Smith</strong></div>
                    <button
                        className={`fa fa-pencil d-flex justify-content-center align-items-end m-0 ${styles.profile_upd_button} 
                        ${styles.no_display}`}/>
                </div>
                <div className={`col-12 m-0 mt-3 p-2 ${styles.profile_form}`}>
                    <form className='col-12'>
                        <label htmlFor='prof_email'>Email: </label>
                        <input type='email' name='email' id='prof_email' defaultValue='helenjohnson@gmail.com'/>
                        <br/>
                        <label htmlFor='prof_phone'>Phone: </label>
                        <input type='phone' name='phone' id='prof_phone' defaultValue='000-000-00-00'/>
                        <br/>
                        <label htmlFor='prof_fblink'>FB link: </label>
                        <input type='url' name='fblink' id='prof_fblink'
                               defaultValue='https://www.facebook.com/anna.smith908430'/>
                    </form>
                </div>

            </div>
            <div className={`col-12 d-flex flex-wrap justify-content-end m-2 p-2`}>
                <button className={` p-0 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.cancelChangesBut}`}> Cancel</button>

                <button className={` p-0 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.saveChangesBut}`}>
                    <i className="fa fa-save"/>Save changes </button>
            </div>
            {/*<div className='row col-12 d-flex flex-wrap justify-content-end m-2 p-2'>*/}
            {/*    <button className={`mx-2 col-2 ${styles.cancelChangesBut}`}>Cancel</button>*/}
            {/*    <button className={`mx-2 col-3 fa fa-save ${styles.saveChangesBut}`}> Save changes</button>*/}
            {/*</div>*/}

        </div>
    );
};

export default ProfileUpdate;
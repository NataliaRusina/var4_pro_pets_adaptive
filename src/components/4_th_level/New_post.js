import React from 'react';
import styles from "../../css_modules/new_post.module.css";
import BrowsePhotos from "../5_th_level/Browse_photos";
import pic1 from '../../images/dog_start.png';
import PublishDiv from "./PublishDiv";

const NewPost = () => {
    return (
        <div className={`${styles.empty_board}`}>
            <div className='col-12 m-0 p-0 container-fluid d-flex align-items-start'>
                <div
                    className={`col-1.5 p-0 m-0 mr-1 d-flex flex-wrap justify-content-end align-items-start 
                    ${styles.post_instr}`}>
                    <strong>Text:</strong>
                    <br/>
                    <i>up to 1500 char</i>
                </div>
                <div className={`col-10 p-1 m-1 mb-2 ${styles.post_area}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, qui, quia. Cupiditate, deserunt est
                    natus odit quasi quod sunt. Aliquam eveniet inventore laudantium nihil nostrum quas similique unde
                    veniam voluptatibus.

                </div>
            </div>

            <div className='col-12 m-0 p-0 container-fluid d-flex align-items-start'>
                <div
                    className={`col-1.5 p-0 pt-3 pb-3 m-0 mr-1 d-flex flex-wrap justify-content-end align-items-start 
                    ${styles.post_instr}`}>
                    <strong>Photos:</strong>
                    <br/>
                    <i>up to 4 images</i>
                </div>
                <div className='col-10 m-0 p-0 row'>
                    <div className={`col-5 p-0 pt-3 pb-3 m-0 container d-flex flex-nowrap`}>
                        <div className={`col-9 p-0 m-0 ${styles.bigPhoto}`}>
                            <img src={pic1} alt='pic1'/>
                        </div>
                        <div className={`col-3 p-0 m-0 ${styles.smallPhotos}`}>
                            <img src={pic1} alt='pic1'/>
                            <img src={pic1} alt='pic1'/>
                            <button><strong> + </strong></button>
                        </div>

                    </div>
                    <div className={`col-7 m-0 p-0`}>
                        <BrowsePhotos/>
                    </div>
                </div>
            </div>

            <PublishDiv/>


        </div>
    );
};

export default NewPost;


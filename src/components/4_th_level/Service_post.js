import React, {useEffect, useState} from 'react';
import styles from "../../css_modules/service_post.module.css";
import serv_picture from '../../images/serv_post_pic@2x.png';
import {bigText} from "../../utils/Constants";


const ServicePost = () => {

    const [post, setPost] = useState(bigText.substr(0, 30));




    const openCloseText = () => {
        if (post.length <= 30) {
            setPost(bigText);

        } else {
            setPost(bigText.substr(0, 30));

        }
    }

    useEffect(()=>{
        console.log(post.length)}, [post.length])


        return (
            <div className={`${styles.empty_board} container-fluid d-flex flex-wrap col-12 p-2`}>
                <div className={`${styles.serv_post_head} col-12 d-flex flex-wrap justify-content-start 
                align-content-center mt-0 pt-0`}>
                    <img src='https://www.gravatar.com/avatar/0?d=mp' alt='user'
                         className={` mt-0 mr-2 pt-0 ${styles.user_photo}`}/>
                    <div className={`mt-0 pt-0 ${styles.user_name} justify-content-start`}>
                        <strong>John Goodboy</strong> <br/> <i>2 h</i></div>
                </div>
                <div
                    className={`${styles.serv_post_pic} container d-flex justify-content-center col-12 col-lg-11 mt-3`}>
                    <img src={serv_picture} alt='services' className='container col-12 '/>
                </div>
                <div
                    className={`container d-flex flex-wrap justify-content-start col-12 col-lg-11 mt-1 
                ${styles.serv_post_maintext} `}>
                    <div id='postText' className='col-12'>{post}</div>

                    <button className={`${styles.moreButton}`} onClick={() =>
                        openCloseText()}> More...
                    </button>


                </div>
                <div className={`offset-10 container-fluid d-flex flex-wrap justify-content-end align-content-center px-1
            ${styles.empty_star}`}>
                    <button
                        className="fa fa-star container-fluid d-flex flex-wrap justify-content-center align-content-center"/>
                </div>
            </div>
        );



};

export default ServicePost;
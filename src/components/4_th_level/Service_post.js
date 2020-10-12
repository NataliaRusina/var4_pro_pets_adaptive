import React from 'react';
import styles from "../../css_modules/service_post.module.css";
import serv_picture from '../../images/serv_post_pic@2x.png'


const ServicePost = () => {

    return (
        <div className={`${styles.empty_board} container-fluid d-flex flex-wrap`}>
            <div className={`${styles.serv_post_head} col-12 d-flex flex-wrap justify-content-start 
                align-content-center mt-0 pt-0`}>
                <img src='https://www.gravatar.com/avatar/0?d=mp' alt='user'
                     className={` mt-0 mr-2 pt-0 ${styles.user_photo}`}/>
                <div className={`mt-0 pt-0 ${styles.user_name} justify-content-start`}>
                    <strong>John Goodboy</strong> <br/> <i>2 h</i></div>
            </div>
            <div className={`${styles.serv_post_pic} container d-flex justify-content-center col-11 mt-3`}>
                <img src={serv_picture} alt='services' className='container col-12 '/>
            </div>
            <div
                className={`container d-flex flex-wrap justify-content-start col-11 mt-1 
                ${styles.serv_post_maintext} `}>
                <div className='col-12'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the
                    industry’s standard dummy text
                </div>
                <button type='button' data-toggle="collapse" data-target="#myCollapse"
                        className={`${styles.moreButton}`}> More...</button>
                <div id='myCollapse' className='col-12 collapse'>ever since the 1500s, when an unknown printer took a
                    galley
                    of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    Why do we use it? It is a long
                    established fact that a reader will be distracted by the readable content of a page when looking at
                    its
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as
                    opposed to using ‘Content here, content here’, making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search
                    for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved
                    over
                    the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    <br/>
                    Contrary to
                    popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et
                    Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum
                    dolor
                    sit amet..”, comes from a line in section 1.10.32. The standard chunk of Lorem
                </div>
            </div>
            <div className={`offset-11 container-fluid d-flex flex-wrap justify-content-end align-content-center px-1
            ${styles.empty_star}`}>
                <button className="fa fa-star container-fluid d-flex flex-wrap justify-content-center align-content-center"/>
            </div>
        </div>
    );
};

export default ServicePost;
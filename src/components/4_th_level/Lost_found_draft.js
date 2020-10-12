import React from 'react';
import styles from '../../css_modules/lost_found_draft.module.css'
import siluets from '../../images/Group 43.png'
import BrowsePhotos from "../5_th_level/Browse_photos";
import PublishDiv from "./PublishDiv";

const Lost_found_draft = () => {
    return (
        <div className={`${styles.empty_board}`}>
            <div className={`container d-flex flex-wrap m-0 p-0 pt-1 pb-1 ${styles.lost_found_draft}`}>


                <div className={`${styles.form_div} col-6 p-0 m-0`}>
                    <form className={`d-flex flex-wrap column`}>
                        <label htmlFor='type'>Type: </label>
                        <select name='type' id='type' className='ml-1'>
                            <option value='dog'>Dog</option>
                            <option value='cat'>Cat</option>
                        </select>
                        <label>Sex: </label>
                        <select name='sex' id='sex' className='ml-1'>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                        <label>Breed: </label>
                        <input type='text' name='breed' id='breed' placeholder='Golden Retriever' className='ml-1'/>
                        <label>Color: </label>
                        <input type='text' name='color' id='color' placeholder='Beige' className='ml-1'/>
                        <label>Height: </label>
                        <select name='height' id='height' className='ml-1'>
                            <option value='less than 45cm'>less than 45cm</option>
                            <option value='45-70cm'>45-70cm</option>
                            <option value='70-100cm'>70-100cm</option>
                            <option value='more than 100cm'>more than 100cm</option>
                        </select>
                        <label>Distinctive <br/> Features: <br/> <i>up to 60 char</i> </label>
                        <textarea name='distinct' id='distinct'
                                  placeholder='blue collar with stars, no left ear, damaged tail.' rows='2'
                                  className='ml-1'/>

                        <label>Description: <br/> <i> up to 150 char </i> </label>
                        <textarea name='descript' id='descript'
                                  placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog.
                               Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.' rows='6'
                                  className='ml-1'/>

                        <label>Location:</label>
                        <textarea name='location' id='location'
                                  placeholder='Florentin Street, Tel Aviv.' rows='2'
                                  className='ml-1'/>


                    </form>
                </div>


                <div className={`col-6 p-0`}>
                    <div
                        className={`container pt-3 pb-3 d-flex flex-wrap justify-content-center align-content-center 
                        ${styles.silPic}`}>
                        <img src={siluets} alt='siluets'/>
                    </div>
                    <BrowsePhotos/>

                </div>

                <div className={`col-12 display-flex flex-wrap justify-content-start ${styles.contacts}`}>
                    <form>
                        <label>Contacts:</label>
                        <input type='tel' name='phone' id='phone' placeholder='Phone*'/>
                        <input type='email' name='email' id='email' placeholder='E-mail*'/>
                        <input type='url' name='fb_url' id='fb_url' placeholder='Facebook profile*'/>
                    </form>
                </div>
                <PublishDiv/>

            </div>
        </div>
    );
};

export default Lost_found_draft;
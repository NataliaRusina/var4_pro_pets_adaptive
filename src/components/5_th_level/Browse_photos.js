import React from 'react';
import styles from "../../css_modules/browse_photos.module.css";
import drop from "../../images/drop.png";

const BrowsePhotos = () => {
    return (
        <div className='row m-0 pt-3 pb-3'>
            <div className={`${styles.browse_photos} b-0 col-6 container d-flex flex-wrap column justify-content-center 
                            align-content-center`}>
                <button><img src={drop}/></button>
                <p className='mt-1'>Drag and drop photos or</p>
                <div className={`${styles.br_button}`}>
                    <button>Browse</button>
                </div>

            </div>
            <div className={`${styles.img_list} col-6 p-0`}>
                <div className={`d-flex flex-wrap justify-content-between`}>img1.jpg
                    <button>x</button>
                </div>
                <div className={`d-flex flex-wrap justify-content-between`}>img1.jpg
                    <button>x</button>
                </div>
                <div className={`d-flex flex-wrap justify-content-between`}>img1.jpg
                    <button>x</button>
                </div>

            </div>
        </div>

    );
};

export default BrowsePhotos;
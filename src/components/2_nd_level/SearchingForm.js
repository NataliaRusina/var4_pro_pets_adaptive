import React from 'react';
import styles from '../../css_modules/searchingForm.module.css'

const SearchingForm = () => {
    return (
        <div className={`container row my-1 mx-3 p-1`}>
            <input type='text' defaultValue='Type' className={`col-11 col-md-2 mx-md-3 my-2 ${styles.type}`}/>
            <input type='text' defaultValue='Breed' className={`col-11 col-md-2 mx-md-3 my-2 ${styles.breed}`}/>
            <input type='text' defaultValue='Additional features' className={`col-11 col-md-3 mx-md-3 my-2 ${styles.addFeat}`}/>
            <input type='text' defaultValue='Location' className={`col-11 col-md-2 mx-md-3 my-2 ${styles.location}`}/>
        </div>
    );
};

export default SearchingForm;
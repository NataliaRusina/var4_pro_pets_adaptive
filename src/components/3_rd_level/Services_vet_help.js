import React from 'react';
import styles from "../../css_modules/content.module.css";
import {vet_help_head} from "../../utils/Constants";
import ServicePost from "../4_th_level/Service_post";

const ServicesVetHelp = () => {
    return (
        <div className={`container-fluid`}>
            <div className={`${styles.board_header}`}>
                <h5>{vet_help_head}</h5>
            </div>
            <div>
                <ServicePost/>
            </div>
        </div>
    );
};

export default ServicesVetHelp;
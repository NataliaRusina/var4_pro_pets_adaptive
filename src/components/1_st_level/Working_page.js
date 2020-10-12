import React from 'react';
import Left_side_bar_expanded from "../2_nd_level/Left_side_bar_expanded";
import Content from "../2_nd_level/Content";
import Right_side_bar_collapsed from "../2_nd_level/Right_side_bar_collapsed";
import Right_side_bar_expanded from '../2_nd_level/Right-side_bar_expanded'
import Header_white from "../2_nd_level/Header_white";
import SearchingForm from "../2_nd_level/SearchingForm";
import Left_side_bar_collapsed from "../2_nd_level/Left_side_bar_collapsed";


const Working_page = () => {

    //==================================== Without map =====================================

    return (
        <div
            className='row-fluid d-flex flex-wrap justify-content-center align-items-stretch p-0 m-0 mh-100 position-static'>
            <div className='container-fluid col-12 p-0 m-0'>
                <Header_white/>
            </div>
            <div className={`container-fluid row col-12 p-0 m-0 justify-content-center align-items-stretch mh-100`}>
                <div className='col-3 m-0 p-0'>
                    <Left_side_bar_expanded/>
                </div>
                <div className='col-9 m-0 p-0'>

                    <div className='row col-12 m-0 p-0'>
                        <div className='col-8 m-0 p-0'>
                            <Content/>
                        </div>
                        <div className='col-4 m-0 p-0'>
                            <Right_side_bar_collapsed/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );

    //==================================== With map =====================================

    // return (
    //     <div
    //         className='row-fluid d-flex flex-wrap justify-content-center align-items-stretch p-0 m-0 mh-100 position-static'>
    //         <div className='container-fluid col-12 p-0 m-0'>
    //             <Header_white/>
    //         </div>
    //         <div className={`container-fluid row col-12 p-0 m-0 justify-content-center align-items-stretch mh-100`}>
    //             <div className='col-2 m-0 p-0'>
    //                 <Left_side_bar_collapsed/>
    //             </div>
    //             <div className='col-10 m-0 p-0'>
    //                 <div className='row col-12 m-0 p-0'>
    //                     <div className='col-12 m-0 p-0'>
    //                         <SearchingForm/>
    //                     </div>
    //                     <div className='col-7 m-0 p-0'>
    //                         <Content/>
    //                     </div>
    //                     <div className='col-5 m-0 p-0'>
    //                         <Right_side_bar_expanded/>
    //                     </div>
    //                 </div>
    //
    //             </div>
    //
    //         </div>
    //
    //     </div>
    //
    // );


};

export default Working_page;
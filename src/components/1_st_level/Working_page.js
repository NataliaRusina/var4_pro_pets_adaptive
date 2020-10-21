import React from 'react';
import Left_side_bar_expanded from "../2_nd_level/Left_side_bar_expanded";
import Content from "../2_nd_level/Content";
import Right_side_bar_collapsed from "../2_nd_level/Right_side_bar_collapsed";
import Right_side_bar_expanded from '../2_nd_level/Right-side_bar_expanded'
import Header_white from "../2_nd_level/Header_white";
import SearchingForm from "../2_nd_level/SearchingForm";
import Left_side_bar_collapsed from "../2_nd_level/Left_side_bar_collapsed";
import Footer from "../2_nd_level/Footer";
import Header_green from "../2_nd_level/Header_green";


const Working_page = () => {

    //==================================== Without map =====================================

    return (
        <div
            className='container-fluid d-flex flex-wrap justify-content-center p-0 m-0 w-100'>
            <div className='d-none d-sm-none d-md-flex col-12 p-0 m-0'>
                <Header_white/>
            </div>
            <div className='d-md-none col-12 p-0 m-0'>
                <Header_green/>
            </div>
            <div className={`container-fluid row col-12 p-0 m-0 justify-content-center`}>
                <div className='d-none d-sm-none d-lg-flex col-lg-3 m-0 p-0'>
                    <Left_side_bar_expanded/>
                </div>


                <div className='row col-12 col-lg-9 m-0 p-0'>
                    <div className='col-12 col-lg-8 m-0 p-0'>
                        <Content/>
                    </div>
                    <div className='d-none d-sm-none d-lg-flex col-lg-4 m-0 p-0'>
                        <Right_side_bar_collapsed/>
                    </div>
                </div>



            </div>
            <div className='d-lg-none col-12 p-0 m-0'>
                <Footer/>
            </div>


        </div>

    );

    //==================================== With map =====================================

    // return (
    //     <div
    //         className='container-fluid d-flex flex-wrap justify-content-center p-0 m-0 w-100'>
    //         <div className='d-none d-sm-none d-lg-flex col-12 p-0 m-0'>
    //             <Header_white/>
    //         </div>
    //         <div className='d-lg-none col-12 p-0 m-0'>
    //             <Header_green/>
    //         </div>
    //         <div className={`container-fluid row col-12 p-0 m-0 justify-content-center`}>
    //             <div className='d-none d-sm-none d-lg-flex col-lg-2 m-0 p-0'>
    //                 <Left_side_bar_collapsed/>
    //             </div>
    //             <div className='col-12 col-lg-10 m-0 p-0'>
    //                 <div className='container-fluid col-12 m-0 p-0'>
    //                     <SearchingForm/>
    //                 </div>
    //                 <div className='container-fluid row col-12 m-0 p-0'>
    //
    //                     <div className='col-12 col-lg-7 m-0 p-0'>
    //                         <Content/>
    //                     </div>
    //                     <div className='d-none d-sm-none d-lg-flex col-lg-5 m-0 p-0'>
    //                             <Right_side_bar_expanded/>
    //                     </div>
    //                 </div>
    //
    //             </div>
    //
    //         </div>
    //
    //         <div className='d-lg-none col-12 p-0 m-0'>
    //             <Footer/>
    //         </div>
    //
    //     </div>
    //
    // );


};

export default Working_page;
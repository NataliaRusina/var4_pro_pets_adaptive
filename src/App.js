import React from 'react';
import './App.css';
import Start_page from "./components/1_st_level/Start_page";
import Working_page from "./components/1_st_level/Working_page";
import SignInSignUp from "./components/1_st_level/Sign_in_sign_up";



function App() {
  return (
      //================================================================== START PAGE =================================

      // <div>
      //     <Start_page/>
      // </div>

      //================================================================== SIGN-IN / SIGN-UP PAGE =================================
    //
    // <div>
    //     <SignInSignUp/>
    // </div>


      //================================================================== WORK PAGE =================================

      <div>
        <Working_page/>
      </div>

  );
}

export default App;

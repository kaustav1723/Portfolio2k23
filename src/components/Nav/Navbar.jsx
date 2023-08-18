// const Navbar=()=> {
  
//   return ( 
//       <header className="text-gray-600 body-font bg-violet-500">
//     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
//       <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
//         <a  href="#Abt" className="mr-5 hover:text-gray-900">ABOUT</a>
//         <a href="#ABout" className="mr-5 hover:text-gray-900">PROJECTS</a>  
//          <a  href="#Test"  className="mr-5 hover:text-gray-900">TESTIMONIALS</a>
//         <a a href="#Con"  className="mr-5 hover:text-gray-900">CONTACT</a>
//          <a  a href="#Do"  className="mr-5 hover:text-gray-900">INTEREST</a>
//       </nav>
//       <button className="inline-flex items-center bg-[#75C2F6] border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-0">ASK ANYTHING
//         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7" />
//        </svg>
//      </button>
//     </div>
//   </header>
//    )
//  }

//  export default Navbar


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Navbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <header className="text-gray-600 body-font bg-violet-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
          <a href="#Abt" className="mr-5 hover:text-gray-900">ABOUT</a>
          <a href="#ABout" className="mr-5 hover:text-gray-900">PROJECTS</a>  
          <a href="#Test" className="mr-5 hover:text-gray-900">TESTIMONIALS</a>
          <a href="#Con" className="mr-5 hover:text-gray-900">CONTACT</a>
          <a href="#Do" className="mr-5 hover:text-gray-900">INTEREST</a>
        </nav>
        <button
          className="inline-flex items-center bg-[#75C2F6] border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-0"
          onClick={handleClick} // Add this onClick event
        >
          ASK ANYTHING
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          server not responding!
        </Alert>
      </Snackbar>
    </header>
  );
};

export default Navbar;
// import React from 'react'


//   function Contact() {
//   return (
//   <section className="text-gray-600 body-font bg-purple-700" id='Con'>
//     <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
//       <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
//         <h1 className="title-font font-medium text-7xl text-gray-900">CONTACT US </h1>
//         <p className="leading-relaxed mt-4 text-white text-3xl font-serif font-bold">Contacting me unlocks tailored guidance, instant insights, and efficient problem-solving. Gain a strategic advantage as we collaborate to conquer challenges and achieve your goals.</p>
//       </div>
//       <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-stone-950">
//         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
//         <div className="relative mb-4">
//           <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
//           <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//         </div>
//         <div className="relative mb-4">
//           <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//           <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//         </div>
//         <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">Sign Up</button>
//         <p className="text-xs text-gray-500 mt-3">Forgot Password? || Having Trouble?.</p>
//       </div>
//     </div>
//   </section>
//   )
//   }


// export default Contact



import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <section className="text-gray-600 body-font bg-purple-700" id='Con'>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-7xl text-gray-900">CONTACT US</h1>
          <p className="leading-relaxed mt-4 text-white text-3xl font-serif font-bold">
            Contacting me unlocks tailored guidance, instant insights, and efficient problem-solving. Gain a strategic advantage as we collaborate to conquer challenges and achieve your goals.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-stone-950">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg"
            onClick={handleClick} // Add this onClick event
          >
            Sign Up
          </button>
          <p className="text-xs text-gray-500 mt-3">Forgot Password? || Having Trouble?.</p>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Contact;



// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

// function Hero() {
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleClick = () => {
//     setOpenSnackbar(true);
//   };

//   const handleClose = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <section className="text-gray-600 body-font bg-[#272829]">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-7xl mb-4  text-blue-600 font-extrabold ">
//             K A U S T A V
//             <br className="hidden lg:inline-block   text-white" />SARKAR
//           </h1>
//           <p className="mb-8 leading-relaxed text-white">PASSIONATE WEB DESIGNER.</p>
//           <div className="flex justify-center">
//             <button
//               className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
//               onClick={handleClick} // Add this onClick event
//             >
//               GET CONNECTED
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-center h-round rounded-full">
//           <img className="w-4/10 h-10/10 rounded-full overflow-hidden" alt="hero" src="https://dummyimage.com/720x600" />
//         </div>
//       </div>

//       {/* Snackbar */}
//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
//           You Are Connected********
//         </Alert>
//       </Snackbar>
//     </section>
//   );
// }

// export default Hero;


// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

// function Hero() {
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleClick = () => {
//     setOpenSnackbar(true);
//   };

//   const handleClose = () => {
//     setOpenSnackbar(false);
//   };

//   const circleStyles = {
//     height: '300px',
//     width: '300px',
//     backgroundColor: 'red',
//     borderRadius: '100%',
//   };

//   return (
//     <section className="text-gray-600 body-font bg-[#272829]">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-7xl mb-4 text-blue-600 font-extrabold">
//             K A U S T A V
//             <br className="hidden lg:inline-block text-white" />SARKAR
//           </h1>
//           <p className="mb-8 leading-relaxed text-white">PASSIONATE WEB DESIGNER.</p>
//           <div className="flex justify-center">
//             <button
//               className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
//               onClick={handleClick}
//             >
//               GET CONNECTED
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-center" style={circleStyles}>
//           <img
//             className="w-4/10 h-10/10 rounded-full overflow-hidden"
//             alt="hero"
//             src="https://dummyimage.com/720x600"
//           />
//         </div>
//       </div>

//       {/* Snackbar */}
//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
//           You Are Connected
//         </Alert>
//       </Snackbar>
//     </section>
//   );
// }

// export default Hero;






import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Hero() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const circleStyles = {
    width: '300px', // Set the same value for width and height to make a perfect circle
    height: '300px',
    backgroundColor: 'red',
    borderRadius: '50%', // Use a value of 50% to create a circle
  };

  return (
    <section className="text-gray-600 body-font bg-[#272829]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-7xl mb-4 text-blue-600 font-extrabold">
            K A U S T A V
            <br className="hidden lg:inline-block text-white" />SARKAR
          </h1>
          <p className="mb-8 leading-relaxed text-white">PASSIONATE WEB DESIGNER.</p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
              onClick={handleClick}
            >
              GET CONNECTED
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center" style={circleStyles}>
          <img
            className="w-[300px] h-[300px] rounded-full overflow-hidden"
            alt="hero"
            src="/me.jpg"
          />
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          You Are Connected
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Hero;
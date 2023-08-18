// const BlogCard = ({ imageSrc, category, title, content }) => {
//     return (
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageSrc} alt="blog" />
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
//             <p className="leading-relaxed mb-3">{content}</p>
//             <div className="flex items-center flex-wrap">
//               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M5 12h14" />
//                   <path d="M12 5l7 7-7 7" />
//                 </svg>
//               </a>
//               <span className="text-gray-400 inline-flex items-center leading-none text-sm ml-auto">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//                   <circle cx={12} cy={12} r={3} />
//                 </svg>
//                 1.2K Likes
//               </span>
//               <span className="text-gray-400 inline-flex items-center leading-none text-sm ml-3">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                 </svg>
//                 6 Comments
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default BlogCard;

// import React from "react";
// import { motion } from "framer-motion";

// const BlogCard = ({ imageSrc, category, title, content }) => {
//   return (
//     <div className="p-4 md:w-1/3">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
//       >
//         <img
//           className="lg:h-48 md:h-36 w-full object-cover object-center"
//           src={imageSrc}
//           alt="blog"
//         />
//         <div className="p-6">
//           {/* Rest of your content */}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default BlogCard;

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const BlogCard = ({ imageSrc, category, title, content }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Only trigger once
//     threshold: 0.2, // Percentage of element visibility to trigger
//   });

//   return (
//     <div className="p-4 md:w-1/3">
//       <div
//         ref={ref}
//         className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ${
//           inView ? "animate-fade-in" : "" // Apply animation class when in view
//         }`}
//       >
//         <img
//           className="lg:h-48 md:h-36 w-full object-cover object-center"
//           src={imageSrc}
//           alt="blog"
//         />
//         {/* Rest of your content */}
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogCard = ({ imageSrc, category, title, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Percentage of element visibility to trigger
  });

  return (
    <div className="p-4 md:w-1/3">
      <div
        ref={ref}
        className={`h-full border-2 border-blue-800 border-opacity-60 rounded-lg overflow-hidden bg-black ${
          inView ? "animate-fade-in" : "" // Apply animation class when in view
        }`}
      >
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageSrc}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-red-600 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed font-serif  text-white mb-3">{content}</p>
          <div className="flex items-center flex-wrap">
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
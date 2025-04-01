
import React from "react";

const Coursecards = ({ course }) => {
  const { title, price, originalPrice, image, desc, link } = course;

  // Calculate the discount percentage
  const discount = ((originalPrice - price) / originalPrice) * 100;

  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[350px] relative hover:scale-105 ease-in-out">
      <img alt={title} src={image} className=" w-full aspect-[1.78]" />
      <span className="px-[0.30rem] rounded-sm text-white text-[0.75rem] font-semibold uppercase bg-blue-900 absolute top-2 right-2 z-40">
        New
      </span>

      <div className="bg-white p-4 sm:p-6">
        <a href="#">
          <p className="mt-0.5 text-lg font-semibold text-gray-900">{title}</p>
        </a>
        <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
        {desc}
    </p>
        <div className="mt-2 flex flex-row gap-4 items-center justify-between">
          <span>
            <span className="text-2xl font-semibold text-blue-700">
              Rs {price}
            </span>
            <span className="text-sm line-through text-gray-500 ml-2">
              Rs {originalPrice}
            </span>
          </span>
          <span className="text-lg text-blue-900">
            {Math.round(discount)}% Off
          </span>
        </div>
        {/* <button className="w-full rounded-lg bg-blue-600 text-white font-semibold text-sm flex justify-center py-1 mx-auto mt-2"> View Courses</button> */}
        <a
          href={link} // External link passed here
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security feature for external links
          className="block w-full rounded-lg bg-blue-600 text-white font-semibold text-sm text-center py-1 mx-auto mt-2"
        >
          View Course
        </a>
      </div>
    </article>
  );
};

export default Coursecards;

// import React from 'react'

// const Coursecards = () => {
//   return (
//     <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[350px] relative hover:scale-105 ease-in-out">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//     className="h-56 w-full object-cover"
//   />
//   <span className=' px-[0.30rem] rounded-sm text-white text-[0.75rem] font-semibold uppercase bg-blue-900 absolute top-2 right-2 z-40'>
//   New
//   </span>

//   <div className="bg-white p-4 sm:p-6">
//     {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

//     <a href="#">
//       <h3 className="mt-0.5 text-lg font-semibold text-gray-900">How to position your furniture for positivity</h3>
//     </a>

//     <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
//       pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
//       mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
//       dignissimos. Molestias explicabo corporis voluptatem?
//     </p>
//     <div className=' flex flex-row gap-4 items-center mt-2 justify-between'>
//     <span>
//     <span className="text-2xl font-semibold text-blue-700 "> Rs 500 </span>
//     <span className="text-sm line-through text-gray-500 "> Rs 500 </span>
//     </span>
//     <span className="text-lg text-blue-900 "> 25% Off </span>
//     </div>
//   </div>
// </article>
//   )
// }

// export default Coursecards;





// #dark
// <article
//   className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
// >
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//     className="h-56 w-full object-cover"
//   />

//   <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
//     <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
//       10th Oct 2022
//     </time>

//     <a href="#">
//       <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
//         How to position your furniture for positivity
//       </h3>
//     </a>

//     <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
//       pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
//       mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
//       dignissimos. Molestias explicabo corporis voluptatem?
//     </p>
//   </div>
// </article>
// import React from 'react';
// import Img1 from "../assets/banner1.png";
// import Img2 from "../assets/banner2.png";
// import Banner from './Banner';

// const AboutUs = () => {
//     const BannerData = {
//         image: Img1,
//         tag: "CUSTOMIZE WITH YOUR SCHEDULE",
//         title: "Personalized Professional Online Tutor on Your Schedule",
//         subtitle:
//           "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
//         link: "#",
//       };
      
//       const BannerData2 = {
//         image: Img2,
//         tag: "CUSTOMIZE WITH YOUR SCHEDULE",
//         title: "Talented and Qualified Tutors to Serve You for Help",
//         subtitle:
//           "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
//         link: "#",
//       };
//   return (
//     <div className='w-11/12 flex flex-col gap-1 items-center mt-2'>
//     <h2 className=' text-5xl text-blue-600 font-bold my-12 uppercase'>About Us</h2>
//          <Banner {...BannerData} />
//          <Banner {...BannerData2} reverse={true} />
//     </div>
//   )
// }

// export default AboutUs;
import React from 'react';
import Img1 from "../assets/banner1.webp";
import Img2 from "../assets/banner2.webp";
import Banner from './Banner';

const AboutUs = ({ id }) => {
  const BannerData = {
    image: Img1,
    tag: "LEARN AT YOUR OWN PACE",
    title: "Personalized Learning Tailored to Your Schedule",
    subtitle:
      "The Civil India Institute has a golden history of success by giving more than 20,000 selections in various competitive examinations since the year 2006. With the help of its experienced and qualified teachers, the Institute has set new records every day by giving record selections in IAS, PCS, SSC, BANK, RAILWAY and other state level competitive examinations as well as in the examinations related to teacher recruitment (PGT, TGT, CTET, UPTET, SUPER TET, KVS, BPSC, DSSSB, etc.). Our aim is that with the efficient and capable guidance of the institute, the dream of all you students to get a government job' can come true.",
    link: "#",
  };

  const BannerData2 = {
    image: Img2,
    tag: "SMART LEARNING, SMARTER SUCCESS!",
    title: "Revolutionizing Learning with High-Tech Classrooms",
    subtitle:
      "We have high-tech classrooms, It consists of Digital Board with a high-tech projector, By using newly arising technologies, the faculties can interact in a more influential way with the students which helps the students learn each concept of every subject perfectly. Apart from all the other facilities, we offer a unique blend of smart assessment through various methods such as Speed Tests, Class Work-Sheet, online classes, online mock tests with conceptual analysis because the selection oriented candidates require the selection oriented guidance.",
    link: "#",
  };

  return (
    <div id={id} className='w-11/12 flex flex-col gap-1 items-center mt-0 md:mt-2 pr-2 md:py-10 '>
      <h2 className=' text-3xl md:text-4xl lg:text-5xl text-blue-600 font-bold mb-2 md:mb-10 uppercase'>About Us</h2>
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
    </div>
  );
};

export default AboutUs;

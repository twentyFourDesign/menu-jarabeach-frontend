// import logo from '../../../../assets/images/jera-logo.png';
// import logo2 from '../../../../assets/images/logo-2.png';

// const aboutLinks = ['History', 'Jera for Good', 'Jobs', 'Texes'];
// const experienceLinks = [
//   'Boat',
//   'Club Jara',
//   'Complaints',
//   'Content Creators',
//   'Covid-19',
//   'Museyo Community',
//   'Vouchers',
//   'Local Attractions',
// ];
// export default function Footer() {
//   return (
//     <div className="bg-[#9DD4D3]">
//       <div className=" font-inter mx-auto  lg:px-[6.5rem] py-[3.5rem] ">
//         {/* // content */}
//         <div className="grid grid-cols-3 ">
//           {/* //logo */}
//           <div>
//             <img src={logo} className="w-80 h-30 object-contain" />
//           </div>
//           {/* lists */}
//           <div className="flex gap-[3rem]">
//             <div>
//               <p className="leading-[24px] text-[18px] font-sembibold tracking-[0.3px] mb-4 ">About</p>
//               {aboutLinks.map((link, index) => (
//                 <li key={index} className="list-none">
//                   {link}
//                 </li>
//               ))}
//             </div>

//             <div>
//               <p className="leading-[24px]  text-[18px] font-sembibold tracking-[0.3px] mb-4 ">Experience</p>
//               {experienceLinks.map((link, index) => (
//                 <li key={index} className="list-none text-[16px] sm:[10px]">
//                   {link}
//                 </li>
//               ))}
//             </div>
//           </div>
//           <div>
//             <img  src={logo2} className="w-80 h-20 object-contain xs:hidden sm:block"  />
//           </div>
//         </div>
//         <div className="text-center grid sm:grid-cols-4 lg::grid-cols-3 xs:grid-cols-6 font-raleway mt-[10rem]">
//           <div></div>
//           <div>
//             <p>© Jara beach resort</p>
//             <p>Owned and operated by Little Company Nigeria Limited</p>
//           </div>
//           <div>
//             <p>RC 1424441</p>
//             <p>TIN 20505177</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import logo from '../../../../assets/images/jera-logo.png';
import logo2 from '../../../../assets/images/logo-2.png';

export default function Footer() {
  return (
    <div className="bg-[#9DD4D3] text-gray-700">
      <div className="font-inter mx-auto lg:px-[6.5rem] py-[3.5rem]">
        {/* Trademark Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
            <img src={logo} className="w-20 h-20 object-contain mb-4 md:mb-0 md:mr-4" alt="Jera Logo" />
            <div className="text-center">
              <p>© Jara Beach Resort</p>
              <p>Owned and operated by Little Company Nigeria Limited</p>
              <p>RC 1424441 | TIN 20505177</p>
            </div>
            <img src={logo2} className="w-20 h-20 object-contain mt-4 md:mt-0 md:ml-4" alt="Second Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}


// import about from '../../../../assets/images/about.jpeg';
// import sebi from '../../../../assets/images/sebi.png';
// import sign from '../../../../assets/images/sign.png';

// export default function AboutUs() {
//   return (
//     <div className="flex flex-col lg:flex-row bg-[#FFD664] font-raleway">
//       <div className="flex-1 relative">
//         <img src={about} className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[800px] object-cover object-center" />
//       </div>
//       <div className="flex-1 flex flex-col justify-center relative p-4 lg:pl-12 lg:pr-20">
//         <div>
//           <img src={sebi} className="mb-4" />
//           <p className="text-sm sm:text-base md:text-lg">
//             Jara provides three full meals a day, drinks (both alcoholic and soft), sweet treats and a snack station
//             available throughout the day. Meals are cooked to order, guaranteeing the freshest most delicious cuisine -
//             a fusion of international favourites and locally sourced ingredients – from the land and the sea. The
//             Restaurant Menu serves Lunch and Dinner for our overnight guests with BBQ and Fiesta feasts on nights with
//             higher occupancy. All Menus shown here <span className="font-bold">menu.jarabeachresort.com.</span> If you
//             have any special requests / dietary requirements, please let us know ahead of your visit.
//           </p>
//           <p className="mt-8 text-sm sm:text-base md:text-lg">
//             We have multiple varied items for our overnight guests. Day Pass visitors enjoy BBQ lunch served "family
//             style", as do overnight guests on alternate days. Breakfast orders are taken after dinner the night before
//             to ensure you receive what you'd like, where you'd like, at a time you like - ensuring a relaxing start to
//             your day.
//           </p>
//         </div>
//         <img src={sign} className="absolute top-0 right-0 h-48 w-64 sm:h-64 sm:w-80 md:h-80 md:w-96 lg:h-[25rem] lg:w-[40rem]" />
//       </div>
//     </div>
//   );
// }


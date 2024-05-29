// import about from '../../../../assets/images/about.jpeg';
// import sebi from '../../../../assets/images/sebi.png';
// import sign from '../../../../assets/images/sign.png';

// export default function AboutUs() {
//   return (
//     <div className="flex bg-[#FFD664] font-raleway">
//       <div className="flex-1 bg-red-500 relative">
//         <img src={about} className="w-full h-[600px] xl:h-[800px] object-cover object-center" />
//       </div>
//       <div className="flex-1 flex flex-col justify-center relative">
//         <div className="pl-12 pr-20">
//           <img src={sebi} className=" " />
//           <p className="text-lg">
//             Jara provides three full meals a day, drinks (both alcoholic and soft), sweet treats and a snack station
//             available throughout the day. Meals are cooked to order, guaranteeing the freshest most delicious cuisine -
//             a fusion of international favourites and locally sourced ingredients – from the land and the sea. The
//             Restaurant Menu serves Lunch and Dinner for our overnight guests with BBQ and Fiesta feasts on nights with
//             higher occupancy. All Menus shown here <span className="font-bold">menu.jarabeachresort.com.</span> If you
//             have any special requests / dietary requirements, please let us know ahead of your visit.
//           </p>
//           <p className="mt-8 text-lg">
//             We have multiple varied items for our overnight guests. Day Pass visitors enjoy BBQ lunch served "family
//             style", as do overnight guests on alternate days. Breakfast orders are taken after dinner the night before
//             to ensure you receive what you'd like, where you'd like, at a time you like - ensuring a relaxing start to
//             your day.
//           </p>
//         </div>
//         <img src={sign} className="absolute top-0 right-0 h-[25rem] w-[40rem]" />
//       </div>
//     </div>
//   );
// }


import about from '../../../../assets/images/about.jpeg';
import sebi from '../../../../assets/images/sebi.png';
import sign from '../../../../assets/images/sign.png';

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row bg-[#FFD664] font-raleway overflow-hidden">
      <div className="md:w-1/2 relative">
        <img src={about} className="w-full h-auto md:h-full object-cover object-center" alt="About" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="pl-8 pr-4">
          <img src={sebi} className="w-32 md:w-48 mb-4 md:mb-8" alt="Sebi" />
          <p className="text-base md:text-lg">
            Jara provides three full meals a day, drinks (both alcoholic and soft), sweet treats, and a snack station
            available throughout the day. Meals are cooked to order, guaranteeing the freshest most delicious cuisine -
            a fusion of international favourites and locally sourced ingredients – from the land and the sea. The
            Restaurant Menu serves Lunch and Dinner for our overnight guests with BBQ and Fiesta feasts on nights with
            higher occupancy. All Menus shown here <span className="font-bold">menu.jarabeachresort.com.</span> If you
            have any special requests/dietary requirements, please let us know ahead of your visit.
          </p>
          <p className="mt-4 md:mt-8 text-base md:text-lg">
            We have multiple varied items for our overnight guests. Day Pass visitors enjoy BBQ lunch served "family
            style", as do overnight guests on alternate days. Breakfast orders are taken after dinner the night before
            to ensure you receive what you'd like, where you'd like, at a time you like - ensuring a relaxing start to
            your day.
          </p>
        </div>
        <img src={sign} className="absolute top-0 right-0 h-[15rem] w-[25rem] md:h-[25rem] md:w-[40rem] hidden md:block" alt="Sign" />
      </div>
    </div>
  );
}

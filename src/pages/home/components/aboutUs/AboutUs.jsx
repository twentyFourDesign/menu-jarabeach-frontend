import about from '../../../../assets/images/about.jpeg';
import sebi from '../../../../assets/images/sebi.png';
import sign from '../../../../assets/images/sign.png';

export default function AboutUs() {
  return (
    <div className="bg-[#FFD664]">
      <div className="max-w-screen-2x flex ">
        <div className="flex-1">
          <img src={about} className="object-contian bg-center h-50" />
        </div>
        <div className="flex-1 relative">
          <div className="px-10 py-[6.5rem]">
            <img src={sebi} className="w-[15rem] block mb-6" />
            <p className="text-lg ">
              Jara provides three full meals a day, drinks (both alcoholic and soft), sweet treats and a snack station
              available throughout the day. Meals are cooked to order, guaranteeing the freshest most delicious cuisine
              - a fusion of international favourites and locally sourced ingredients – from the land and the sea. The
              Restaurant Menu serves Lunch and Dinner for our overnight guests with BBQ and Fiesta feasts on nights with
              higher occupancy. All Menus shown here <span className="bold">menu.jarabeachresort.com.</span> If you have
              any special requests / dietary requirements, please let us know ahead of your visit.
            </p>
            <p className="mt-8 text-lg">
              We have multiple varied items for our overnight guests. Day Pass visitors enjoy BBQ lunch served "family
              style", as do overnight guests on alternate days. Breakfast orders are taken after dinner the night before
              to ensure you receive what you'd like, where you'd like, at a time you like - ensuring a relaxing
              start to your day.
            </p>
          </div>
          <img src={sign} className=" absolute top-0 left-0" />
        </div>
      </div>
    </div>
  );
}

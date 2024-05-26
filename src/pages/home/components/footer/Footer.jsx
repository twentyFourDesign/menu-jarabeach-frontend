import logo from '../../../../assets/images/jera-logo.png';
import logo2 from '../../../../assets/images/logo-2.png';

const aboutLinks = ['History', 'Jera for Good', 'Jobs', 'Texes'];
const experienceLinks = [
  'Boat',
  'Club Jara',
  'Complaints',
  'Content Creators',
  'Covid-19',
  'Museyo Community',
  'Vouchers',
  'Local Attractions',
];
export default function Footer() {
  return (
    <div className="bg-[#9DD4D3]">
      <div className=" font-inter mx-auto  px-[6.5rem] py-[3.5rem] ">
        {/* // content */}
        <div className="grid grid-cols-3 ">
          {/* //logo */}
          <div>
            <img src={logo} className="w-80 h-30 object-contain" />
          </div>
          {/* lists */}
          <div className="flex gap-[3rem]">
            <div>
              <p className="leading-[24px] text-[18px] font-sembibold tracking-[0.3px] mb-4 ">About</p>
              {aboutLinks.map((link, index) => (
                <li key={index} className="list-none">
                  {link}
                </li>
              ))}
            </div>

            <div>
              <p className="leading-[24px] text-[18px] font-sembibold tracking-[0.3px] mb-4 ">Experience</p>
              {experienceLinks.map((link, index) => (
                <li key={index} className="list-none">
                  {link}
                </li>
              ))}
            </div>
          </div>
          <div>
            <img src={logo2} className="w-80 h-20 object-contain" />
          </div>
        </div>
        <div className="text-center grid grid-cols-3 font-raleway mt-[10rem]">
          <div></div>
          <div>
            <p>© Jara beach resort</p>
            <p>Owned and operated by Little Company Nigeria Limited</p>
          </div>
          <div>
            <p>RC 1424441</p>
            <p>TIN 20505177</p>
          </div>
        </div>
      </div>
    </div>
  );
}

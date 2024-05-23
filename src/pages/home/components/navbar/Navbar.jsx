import logo from '../../../../assets/images/jera-logo.png';
export default function Navbar() {
  return (
    <div className="bg-[#8CD7D3] ">
      <div className="flex max-w-screen-2xl  justify-center">
        <img src={logo} className='w-96 h-48 object-contain' />
      </div>
    </div>
  );
}

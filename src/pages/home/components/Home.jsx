import AboutUs from './aboutUs/AboutUs';
import Categories from './categories/Categories';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';

export function Home() {
  return (
    <main className="bg-[#ffffff] ">
      <Hero />
      <Categories />
      <AboutUs />
      <Footer />
    </main>
  );
}

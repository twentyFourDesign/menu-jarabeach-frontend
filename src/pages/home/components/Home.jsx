import AboutUs from './aboutUs/AboutUs';
import Categories from './categories/Categories';
import Footer from './footer/footer';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';

export function Home() {
  return (
    <main className="bg-[#f6f3f3]">
      <Navbar />
      <Hero />
      <Categories />
      <AboutUs />
      <Footer />
    </main>
  );
}

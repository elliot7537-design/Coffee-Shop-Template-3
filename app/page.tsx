import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recipe from "@/components/Recipe";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Recipe />
      <Menu />
      <Story />
      <Why />
      <Testimonials />
      <Visit />
      <Footer />
    </main>
  );
}

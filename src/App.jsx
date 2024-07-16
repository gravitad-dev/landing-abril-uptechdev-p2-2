import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Contact from "./components/Contact/Contact";
import Employees from "./components/Employees/Employees";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Industries from "./components/Industries/Industries";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Reviews from "./components/Reviews/Reviews";
import SocialButtons from "./components/Socials";
import VideoSection from "./components/VideoSection/VideoSection";
import Layout from "./components/ui/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <main className="bg-[#e5dfd7] text-dark min-h-screen">
      <Navbar />
      <Layout>
        <section className="pt-[10px]">
          <Hero />
        </section>
        <section className="pt-[200px]">
          <Industries />
        </section>
        <section className="pt-[200px]">
          <Employees />
        </section>
        <section className="pt-[150px] lg:pt-[250px]">
          <VideoSection />
        </section>
        <section className="pt-[150px] lg:pt-[250px]">
          <Projects />
        </section>
        <section className="pt-[150px] lg:pt-[250px]">
          <Benefits />
        </section>
        <section className="pt-[150px] lg:pt-[250px] ">
          <About />
        </section>
        <section className="pt-[150px] lg:pt-[250px] ">
          <Reviews />
        </section>
        <section className="pt-[150px] lg:pt-[250px] ">
          <Contact />
        </section>
      </Layout>

      <SocialButtons />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;

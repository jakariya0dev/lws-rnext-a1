import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Companies from "./components/Companies";
import Service1 from "./sections/Service1";
import Service2 from "./sections/Service2";
import Testimonial from "./sections/Testimonial";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Trial from "./sections/Trial";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial/>
      <Footer/>
    </div>
  );
}

export default App;

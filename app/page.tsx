import Navbar from "./components/navbar";
import HeroSection from "./components/homepage";
import HowItWorks from "./components/howitworks";
import FeatureCard from "./components/featurecard";
import AdditionalFeatures from "./components/additfea";
import Feedback from "./components/feedback";
import Testimonials from "./components/reviews";
import PricingPlans from "./components/price";
import FAQSection from "./components/feq";
import Contact from "./components/getintouch";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <HowItWorks/>
      <FeatureCard/>
      <AdditionalFeatures/>
      <Feedback/>
      <Testimonials/>
      <PricingPlans/>
      <FAQSection/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}

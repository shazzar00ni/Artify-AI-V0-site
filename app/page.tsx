import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <Services />
      <FeatureCarousel />
      <PortfolioGrid />
      <AboutUs />
      <Timeline />
      <Testimonials />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}


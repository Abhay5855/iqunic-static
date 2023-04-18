
import './App.css'
import AboutContainer from './components/about/AboutContainer'
import ContactContainer from './components/contact/ContactContainer'
import Features from './components/features/Features'
import FooterContainer from './components/footer/FooterContainer'
import HeroContainer from './components/hero/HeroContainer'
import NavbarContainer from './components/navbar/NavbarContainer'
import PricingContainer from './components/pricing/PricingContainer'
import TeamContainer from './components/team/TeamContainer'
import HowItWorks from "./components/works/HowItWorks";


function App() {
 

  return (
    <div className="flex flex-col">

      <NavbarContainer />
      <HeroContainer />
      <AboutContainer />
      <Features />
      <HowItWorks />
      <PricingContainer />
      <TeamContainer />
      <ContactContainer />
      <FooterContainer />
      
      
    </div>
  )
}

export default App

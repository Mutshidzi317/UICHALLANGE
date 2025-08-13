import { useState } from 'react'
import { TopNavBar } from './components/TopNavBar/navbar'
import HeroSection from './components/SecondPart/anida'
import OrangeBenefit from './components/Orange/OrangeBenefit'
import ImageGrid from './components/Products/ImageGrid'
import Imaginepart from './components/ImaginePart/ImaginePart'
import FooterSection from './components/Footer/FooterSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <TopNavBar></TopNavBar>
   <HeroSection></HeroSection>
   <OrangeBenefit></OrangeBenefit>
   <ImageGrid></ImageGrid>
   <Imaginepart></Imaginepart>
   <FooterSection></FooterSection>
   </>
  )
}

export default App




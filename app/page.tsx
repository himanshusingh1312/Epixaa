import React from 'react'
import Header from './header/page'
import Hero1 from './hero1/page'

import Services from './services/page'
import Hero2 from './hero2/page'
import Footer from './footer/page'
import Faqs from './faqs/page'
import Hire from './hire/page'

import Example from './example/page'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero1/>
      <Hero2/>
      
      <Services/>
      <Hire/>
      <Example/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home

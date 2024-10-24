import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLettersBox from '../components/NewsLettersBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsLettersBox/>
    </div>
  )
}

export default Home
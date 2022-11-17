import React from 'react'
import Hero from './Hero/Hero'
import Howitworks from './Howitworks/Howitworks'
import Partners from './Partners/Partners'
import Recycle from './Recycle/Recycle'
import Whoweare from './Whoweare/Whoweare'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cleanhub</title>
        <link rel="canonical" href="https://cleanhubb.netlify.app/" />
      </Helmet>

      <Hero />
      <Whoweare />
      <Howitworks />
      <Recycle />
      <Partners />
    </>
  )
}

export default Home
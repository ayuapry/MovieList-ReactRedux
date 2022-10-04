import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import { Footer } from '../components/Footer'
import requests from '../Requests'

export const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Adventure' fetchURL={requests.requestAdventure} />
        <Row rowID='5' title='Family' fetchURL={requests.requestFamily} />
        <Row rowID='6' title='Animation' fetchURL={requests.requestAnimation} />
        <Footer />

    </div>
  )
}

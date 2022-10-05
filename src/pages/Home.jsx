import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import { Footer } from '../components/Footer'
import requests from '../Requests'

export const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Popular Movie' fetchURL={requests.requestPopular} />
        <Row rowID='2' title='Top Rated Movie' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='Up Coming Movie' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Adventure Movie' fetchURL={requests.requestAdventure} />
        <Row rowID='5' title='Family Movie' fetchURL={requests.requestFamily} />
        <Row rowID='6' title='Horor Movie' fetchURL={requests.requestHoror} />
        <Footer />

    </div>
  )
}

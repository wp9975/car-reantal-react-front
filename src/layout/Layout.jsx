import React, { Fragment } from 'react'

import Footer from '../components/footer/Footer'
import Routes from '../config/Routes'
import Nav from '../components/navigation/Nav'
const Layout = () => {
  return (
    <Fragment>
        <Nav/>
        <div>
            <Routes/>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout
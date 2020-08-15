import React from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = ({ children, page, location }) => {
  return (
    <>
      <Header page={page} location={location} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

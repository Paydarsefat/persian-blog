import React from "react"
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({ children, page, location }) => {
  return (
    <>
      <Header page={page} location={location} />
      {children}
      <Footer location={location} />
    </>
  )
}

export default Layout

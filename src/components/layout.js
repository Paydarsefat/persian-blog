import React from "react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = ({ children, page }) => {
  return (
    <>
      <Header page={page} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

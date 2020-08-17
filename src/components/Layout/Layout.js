import React, { useState } from "react"
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MyApp from '../../contexts/MyApp'

const Layout = ({ children, page, location }) => {
  const [userData,setUserData] = useState({})
  return (
    <MyApp.Provider value={{
      user: {
        userData,
        setUserData,
      }
    }}>
      <Header page={page} location={location} />
      {children}
      <Footer location={location} />
    </MyApp.Provider>
  )
}

export default Layout

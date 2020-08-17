import React, { useState } from "react"
import MyApp from "../contexts/MyApp"

const RootLayout = ({ children }) => {
  
    const [userData,setUserData] = useState({})

  return (
        <MyApp.Provider value={{
            user: {
                userData,
                setUserData,
            }
            }}>
        {children}
        </MyApp.Provider>
    )
}

export const BrowserRootLayout = RootLayout
export const SsrRootLayout = RootLayout

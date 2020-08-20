import React, { useState } from 'react'
import MyApp from '../contexts/MyApp'
import fetchHandler from '../utils/fetchHandler'

const RootLayout = ({ children }) => {
  const [userData, setUserData] = useState({})

  const logout = () => {
    setUserData({})
  }

  const updateUser = async () => {
    if (!localStorage.getItem('token')) {
      logout()
      return
    }
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: '/api/v1/user/profile',
        auth: true,
      })
      setUserData(result.data.user)
    } catch (e) {
      console.error(e)
      logout()
    }
  }

  return (
    <MyApp.Provider
      value={{
        user: {
          userData,
          setUserData,
          updateUser,
        },
      }}
    >
      {children}
    </MyApp.Provider>
  )
}

export const BrowserRootLayout = RootLayout
export const SsrRootLayout = RootLayout

import React, { useState } from 'react'
import MyApp from '../contexts/MyApp'
import fetchHandler from '../utils/fetchHandler'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { useEffect } from 'react'

const RootLayout = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [modalToShow, setModalToShow] = useState(null)
  const [loadingName, setLoadingName] = useState(null)
  const [processName, setProcessName] = useState(null)

  const logout = () => {
    setUserData({})
  }

  const updateUser = async () => {
    if (!localStorage.getItem('token')) {
      logout()
      return
    }
    setLoadingName('profile')
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
    setLoadingName('')

    if (processName) {
      setModalToShow('buyModal')
    }
  }

  useEffect(() => {
    Sentry.init({
      dsn:
        'https://2ca57d8719874c999d918938aedfc03c@o458568.ingest.sentry.io/5456307',
      integrations: [new Integrations.BrowserTracing()],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    })
  }, [])

  return (
    <MyApp.Provider
      value={{
        user: {
          userData,
          setUserData,
          updateUser,
        },
        modal: {
          modalToShow,
          setModalToShow,
        },
        load: {
          loadingName,
          setLoadingName,
        },
        process: {
          processName,
          setProcessName,
        },
      }}
    >
      {children}
    </MyApp.Provider>
  )
}

export const BrowserRootLayout = RootLayout
export const SsrRootLayout = RootLayout

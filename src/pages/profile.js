import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import MyApp from '../contexts/MyApp'
import { Alert, Form, Button } from 'react-bootstrap'
import fetchHandler from '../utils/fetchHandler'

const Profile = ({ location }) => {
  const app = useContext(MyApp)
  const [isLoadingProfile, setIsLoadingRegisterForm] = useState(false)
  const [responseOfProfileAPI, setResponseOfApiProfile] = useState(null)
  const [formProfileValues, setFormRegisterValues] = useState({
    first_name: app.user.userData.first_name,
    last_name: app.user.userData.last_name,
  })

  const handleChangeRegisterForm = (name, event) => {
    if (event) event.preventDefault()
    setFormRegisterValues({
      ...formProfileValues,
      [name]: event.target.value,
    })
  }

  const handleSubmitRegister = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingRegisterForm(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/profileUpdate',
        body: {
          first_name: formProfileValues.first_name,
          last_name: formProfileValues.last_name,
        },
        auth: true,
      })
      if (result.data.success) {
        setResponseOfApiProfile({
          type: 'success',
          message: 'پروفایل شما با موفقیت آپدیت شد',
        })
        app.user.updateUser()
      } else {
        setResponseOfApiProfile({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterForm(false)
  }

  useEffect(() => {
    setFormRegisterValues({
      first_name: app.user.userData.first_name,
      last_name: app.user.userData.last_name,
    })
  }, [app.user.userData.first_name, app.user.userData.last_name])

  return (
    <Layout location={location} title={'پروفایل'} page="about">
      <SEO title={'پروفایل'} />
      {!app.user.userData.id && (
        <div className="alert alert-info widthAll">
          شما به این بخش دسترسی ندارید، لطفا وارد شوید
        </div>
      )}
      {app.user.userData.id && (
        <div className="no-pd" id="content">
          <div className="container">
            <div className="breadcrumb">
              <ul>
                <li>
                  <Link to={'/'}>
                    <i className="fas fa-home"></i>خانه
                  </Link>
                </li>
                <li className="active">پروفایل</li>
              </ul>
            </div>
            <div className="about-us">
              <div className="row content-container">
                <>
                  <div className="col-12 col-md-4 col-lg-3 profle-image">
                    <img src={app.user.userData.image} alt="profile" />
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 profle">
                    <h1>
                      پروفایل
                      {` `}
                      {app.user.userData.first_name}
                      {` `}
                      {app.user.userData.last_name}
                    </h1>
                    <Form
                      onSubmit={!isLoadingProfile ? handleSubmitRegister : null}
                    >
                      <div className="profile-body">
                        <div className="profile-body-form">
                          {responseOfProfileAPI && (
                            <Alert variant={responseOfProfileAPI.type}>
                              {responseOfProfileAPI.message}
                            </Alert>
                          )}
                          <Form.Group controlId="formBasicText">
                            <Form.Label>نام</Form.Label>
                            <Form.Control
                              onChange={(event) =>
                                handleChangeRegisterForm('first_name', event)
                              }
                              type="text"
                              value={formProfileValues.first_name}
                              placeholder="نام خود را وارد نمایید"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicText">
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control
                              onChange={(event) =>
                                handleChangeRegisterForm('last_name', event)
                              }
                              type="text"
                              value={formProfileValues.last_name}
                              placeholder="نام خانوادگی خود را وارد نمایید"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control
                              disabled
                              type="email"
                              value={app.user.userData.email}
                              placeholder="ایمیل خود را وارد نمایید"
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoadingProfile}
                          >
                            ویرایش پروفایل
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Profile

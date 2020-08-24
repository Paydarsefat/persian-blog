import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import MyApp from '../contexts/MyApp'
import loading from '../components/Icon/loading.gif'
import { Alert, Form, Button, Tabs, Tab, Table } from 'react-bootstrap'
import fetchHandler from '../utils/fetchHandler'
import formatPrice from '../utils/formatPrice'

const Profile = ({ location }) => {
  const app = useContext(MyApp)
  const [isLoading, setIsLoading] = useState(false)

  const [transactions, setTransactions] = useState([])

  const [formProfileValues, setFormRegisterValues] = useState({
    first_name: app.user.userData.first_name,
    last_name: app.user.userData.last_name,
    email: app.user.userData.email,
  })
  const [formPasswordValues, setFormPasswordValues] = useState({
    old_password: '',
    new_password: '',
  })

  const [responseOfProfileAPI, setResponseOfApiProfile] = useState(null)
  const [responseOfPasswordAPI, setResponseOfPasswordAPI] = useState(null)

  const handleChangeRegisterForm = (name, event) => {
    if (event) event.preventDefault()
    setFormRegisterValues({
      ...formProfileValues,
      [name]: event.target.value,
    })
  }
  const handleChangePasswordForm = (name, event) => {
    if (event) event.preventDefault()
    setFormPasswordValues({
      ...formPasswordValues,
      [name]: event.target.value,
    })
  }

  const handleUpdateProfle = async (event) => {
    if (event) event.preventDefault()
    setIsLoading(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/profileUpdate',
        body: {
          first_name: formProfileValues.first_name,
          last_name: formProfileValues.last_name,
          email: formProfileValues.email,
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
    setIsLoading(false)
  }

  const handleUpdatePassword = async (event) => {
    if (event) event.preventDefault()
    setIsLoading(true)

    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/passwordUpdate',
        body: {
          old_password: formPasswordValues.old_password,
          new_password: formPasswordValues.new_password,
        },
        auth: true,
      })
      if (result.data.success) {
        setResponseOfPasswordAPI({
          type: 'success',
          message: 'کلمه عبور شما با موفقیت آپدیت شد',
        })
        app.user.updateUser()
      } else {
        setResponseOfPasswordAPI({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleLoadTransactions = async (event) => {
    if (event) event.preventDefault()
    setIsLoading(true)

    try {
      const result = await fetchHandler({
        method: 'GET',
        url: '/api/v1/transaction',
        auth: true,
      })
      if (result.data.success) {
        setTransactions(result.data.result)
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const onSelect = (key) => {
    if (key === 'transactions') {
      handleLoadTransactions()
    }
  }

  useEffect(() => {
    setFormRegisterValues({
      first_name: app.user.userData.first_name,
      last_name: app.user.userData.last_name,
      email: app.user.userData.email,
    })
  }, [
    app.user.userData.first_name,
    app.user.userData.last_name,
    app.user.userData.email,
  ])

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
                    <Tabs defaultActiveKey="editProfile" onSelect={onSelect}>
                      <Tab eventKey="editProfile" title="ویرایش پروفایل">
                        <div className="profile-tabs">
                          <div className="prifle-tab-heading">
                            {isLoading && (
                              <img
                                className="loading"
                                src={loading}
                                alt="loading"
                              />
                            )}
                            <h1>
                              پروفایل
                              {` `}
                              {app.user.userData.first_name}
                              {` `}
                              {app.user.userData.last_name}
                            </h1>
                          </div>

                          <Form
                            onSubmit={!isLoading ? handleUpdateProfle : null}
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
                                      handleChangeRegisterForm(
                                        'first_name',
                                        event
                                      )
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
                                      handleChangeRegisterForm(
                                        'last_name',
                                        event
                                      )
                                    }
                                    type="text"
                                    value={formProfileValues.last_name}
                                    placeholder="نام خانوادگی خود را وارد نمایید"
                                  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>ایمیل</Form.Label>
                                  <Form.Control
                                    type="email"
                                    onChange={(event) =>
                                      handleChangeRegisterForm('email', event)
                                    }
                                    value={formProfileValues.email}
                                    placeholder="ایمیل خود را وارد نمایید"
                                  />
                                </Form.Group>
                                <Button
                                  variant="primary"
                                  type="submit"
                                  disabled={isLoading}
                                >
                                  ویرایش پروفایل
                                </Button>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </Tab>
                      {/* <Tab eventKey="transactions" title="تراکنشات">
                        <div className="profile-tabs">
                          <h1>تراکنشات</h1>
                          <div>
                            {transactions.length === 0 && (
                              <Alert variant={'info'}>
                                هیچ تراکنشی ثبت نشده است
                              </Alert>
                            )}
                            {transactions.length > 0 && (
                              <div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>شناسه</th>
                                      <th>قیمت</th>
                                      <th>وضعیت</th>
                                      <th>دوره</th>
                                      <th>پیام</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {transactions.map((item, index) => (
                                      <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                          {formatPrice(item.amount)} تومان
                                        </td>
                                        <td>
                                          {item.status === 'prepared'
                                            ? 'در حال انتظار'
                                            : 'تکمیل شده'}
                                        </td>
                                        <td>
                                          {item.course === 'react-basic'
                                            ? 'دوره React JS مقدماتی'
                                            : 'دوره React JS پیشرفته'}
                                        </td>
                                        <td>{item.message}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </div>
                            )}
                          </div>
                        </div>
                      </Tab> */}
                      {/* <Tab eventKey="courses" title="دوره‌ها">
                        <div className="profile-tabs">
                          <h1>دوره‌ها</h1>
                          <div>AA</div>
                        </div>
                      </Tab> */}
                      <Tab eventKey="changePassword" title="تغییر رمز عبور">
                        <div className="profile-tabs">
                          <h1>تغییر رمز عبور</h1>
                          <div>
                            <Form
                              onSubmit={
                                !isLoading ? handleUpdatePassword : null
                              }
                            >
                              <div className="profile-body">
                                <div className="profile-body-form">
                                  {responseOfPasswordAPI && (
                                    <Alert variant={responseOfPasswordAPI.type}>
                                      {responseOfPasswordAPI.message}
                                    </Alert>
                                  )}
                                  <Form.Group controlId="formBasicText">
                                    <Form.Label>کلمه عبور فعلی</Form.Label>
                                    <Form.Control
                                      onChange={(event) =>
                                        handleChangePasswordForm(
                                          'old_password',
                                          event
                                        )
                                      }
                                      type="password"
                                      value={formPasswordValues.old_password}
                                      placeholder="کلمه عبور فعلی خود را وارد کنید"
                                    />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicText">
                                    <Form.Label>کلمه عبور جدید</Form.Label>
                                    <Form.Control
                                      onChange={(event) =>
                                        handleChangePasswordForm(
                                          'new_password',
                                          event
                                        )
                                      }
                                      type="password"
                                      value={formPasswordValues.new_password}
                                      placeholder="کلمه عبور جدید خود را وارد کنید"
                                    />
                                  </Form.Group>

                                  <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isLoading}
                                  >
                                    ویرایش کلمه عبور
                                  </Button>
                                </div>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
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

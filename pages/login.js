import React, { useState } from 'react'
import Link from 'next/link'

function Login() {
  const initialState = { email: '', password: '' }
  const [formData, setformData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    setformData(initialState)
  }

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold text-primaryColor mb-4">
                Sign in to your account
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email/Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    required
                    value={formData.password}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <Link href="/signup">
                    <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                      Become a member <span className="ml-2 text-secondaryColor">Signup</span>
                    </div>
                  </Link>
                  <p className="text-secondaryColor font-demi grey-hover mt-4 py-3 px-3">
                    Forgot Password
                  </p>
                </div>
                <div className="text-center mt-5">
                  <button className="text-white bg-secondaryColor font-demi btn-blue" type="submit">
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

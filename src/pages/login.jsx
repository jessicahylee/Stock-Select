import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './login.scss'

const SERVER_URL = 'http://localhost:5050'

const Login = () => {
  const [login, setLogin] = useState({})

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    const fetchUserData = async () => {
      try {
        if (code) {
          // Use `withCredentials` for a GET request to pass the cookie to the server
          const response = await axios.get(
            `${SERVER_URL}/auth/google/callback?code=${code}`,
            {
              withCredentials: true,
            },
          )

          // Update state with fetched user data
          setLogin(response.data)
        }
      } catch (error) {
        console.log('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  const handleLogin = () => {
    // Redirect the user to the backend route to initiate Google OAuth
    window.location.href = `${SERVER_URL}/auth/google`
  }

  return (
    <div className="login__container-div">
      <h2 className="login__container-title">Welcome to Stock Select!</h2>
      <button onClick={handleLogin}>Login with Google</button>
      {login.username && <p>Logged in user: {login.username}</p>}
      {/* Add more rendering logic based on the 'login' state */}
    </div>
  )
}

export default Login



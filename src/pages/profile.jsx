import { useEffect, useState } from 'react'
import axios from 'axios'
import './profile.scss'

const SERVER_URL = 'http://localhost:5050'

const Profile = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then((res) => {
        setIsAuthenticating(false)
        setIsLoggedIn(true)
        setProfileData(res.data)
      })
      .catch((err) => {
        // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
        if (err.response.status === 401) {
          // Update the state: done authenticating, user is not logged in
          setIsAuthenticating(false)
          setIsLoggedIn(false)
        } else {
          console.log('Error authenticating', err)
        }
      })
  }, [])

  const formatDate = (date) => {
    // Return date formatted as 'month/day/year'
    return new Date(date).toLocaleDateString('en-US')
  }

  // While the component is authenticating, do not render anything (alternatively, this can be a preloader)
  if (isAuthenticating) return null

  return (
    <section className="profile-page">
      <h1>Profile Page</h1>
      {/* If user is logged in, render their profile information */}
      {isLoggedIn ? (
        profileData && (
          <>
            <h2>Hello, {profileData.given_name}</h2>
            <h3>Registered since: {formatDate(profileData.updated_at)}</h3>
            <img
              className="profile-page__avatar"
              src={picture.avatar_url}
              alt={`${profileData.given_name} avatar`}
            />
            <div className="profile-page__logout-wrapper">
              {/* Render a logout button */}
            </div>
          </>
        )
      ) : (
        // If user is not logged in, render a login button
        <>
          <p>
            <strong>This page requires authentication.</strong>
          </p>
        </>
      )}
    </section>
  )
}

export default Profile

import React, { useEffect, useState } from 'react'
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
        setIsAuthenticating(false)
        setIsLoggedIn(false)
        console.error('Error authenticating:', err)
      })
  }, [])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US')
  }

  const handleLogout = async () => {
    try {
      await axios.post(
        `${SERVER_URL}/auth/logout`,
        {},
        { withCredentials: true },
      )
      setIsLoggedIn(false)
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  if (isAuthenticating) return <div>Loading...</div>

  return (
    <section className="profile__page">
      <h1 className="profile__page-title">Profile Page</h1>
      {isLoggedIn ? (
        profileData ? (
          <>
            <h2 className="profile__page-hello">Hello, {profileData.given_name}! Welcome to CyrptoSelect</h2>
            <h3 className="profile__page-hello">Registered since: {formatDate(profileData.updated_at)}</h3>
            <img
              className="profile-page__avatar"
              src={profileData.avatar_url}
              alt={`${profileData.given_name} avatar`}
            />
            <div className="profile-page__logout-wrapper">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <p>No profile data available.</p>
        )
      ) : (
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

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './profile.scss'

// const SERVER_URL = 'http://localhost:5050'

// const Profile = () => {
//   const [isAuthenticating, setIsAuthenticating] = useState(true)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [profileData, setProfileData] = useState(null)

//   useEffect(() => {
//     axios
//       .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
//       .then((res) => {
//         setIsAuthenticating(false)
//         setIsLoggedIn(true)
//         setProfileData(res.data)
//       })
//       .catch((err) => {
//         setIsAuthenticating(false)
//         setIsLoggedIn(false)
//         console.log('Error authenticating', err)
//       })
//   }, [])

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString('en-US')
//   }

//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         `${SERVER_URL}/auth/logout`,
//         {},
//         { withCredentials: true },
//       )
//       setIsLoggedIn(false)
//     } catch (error) {
//       console.log('Error logging out:', error)
//     }
//   }

//   if (isAuthenticating) return null

//   return (
//     <section className="profile-page">
//       <h1>Profile Page</h1>
//       {isLoggedIn ? (
//         profileData && (
//           <>
//             <h2>Hello, {profileData.given_name}</h2>
//             <h3>Registered since: {formatDate(profileData.updated_at)}</h3>
//             <img
//               className="profile-page__avatar"
//               src={profileData.avatar_url}
//               alt={`${profileData.given_name} avatar`}
//             />
//             <div className="profile-page__logout-wrapper">
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           </>
//         )
//       ) : (
//         <>
//           <p>
//             <strong>This page requires authentication.</strong>
//           </p>
//         </>
//       )}
//     </section>
//   )
// }

// export default Profile

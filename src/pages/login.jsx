import './login.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

const SERVER_URL = 'http://localhost:5050'

const PostsLogin = () => {
  const [login, setLogin] = useState([])

  // Fetch posts from the DB
  const PageLogin = () => {
    // Make sure to user `withCredentials` for a GET request, to pass the cookie to the server
    axios
      .get(`${SERVER_URL}/auth/google`, { withCredentials: true })
      .then((posts) => {
        // Update state with fetched posts
        setLogin(posts.data)
      })
      .catch((err) => {
        console.log('Error fetching posts:', err)
      })
  }

  useEffect(() => {
    PageLogin()
  }, [])
}
function Login() {
  return (
    <div className="login__container-div">
      <h3 className="login__container-title"> Welcome to Stock Select!</h3>
    </div>
  )
}
export default Login

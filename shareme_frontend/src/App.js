import { GoogleOAuthProvider } from '@react-oauth/google'
import React,{useEffect} from 'react'
import { Route,Routes,useNavigate} from 'react-router-dom'

import { Login } from './components/Login'
import { Home } from './container/Home'
import { fetchUser } from './utils/fetchUser'

export const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if(!user) navigate('/login')
  }, [])
  
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

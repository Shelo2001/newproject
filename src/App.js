import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostsList from './pages/PostsList'
import UserDetails from './pages/UserDetails'
import PostDetails from './pages/PostDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<PostsList />} />
        <Route path='/user/:id' element={<UserDetails />} />
        <Route path='/post/:id' element={<PostDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App

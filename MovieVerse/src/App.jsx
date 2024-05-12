import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import DetailMovie from './pages/Details/DetailMovie'
import Saved from './pages/Saved/Saved'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import PrivateRoute from './pages/Auth/PrivateRoute'
import NotFound from './pages/404 Page/NotFound'
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<DetailMovie/>}/>
          <Route path='/saved' element={<Saved/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

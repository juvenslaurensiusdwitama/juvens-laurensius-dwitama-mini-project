import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import DetailMovie from './pages/Details/DetailMovie'
import Saved from './pages/Saved/Saved'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<DetailMovie/>}/>
        <Route path='/saved' element={<Saved/>}/>
      </Routes>
    </>
  )
}

export default App

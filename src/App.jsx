/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './App.css' */
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourites from './components/Favourites'
import PageNotFound from './components/PageNotFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
        <Route path='/' element={
          <>
            <Banner></Banner>
            <Movies></Movies>
          </>
        }
        ></Route>

<Route path='/movieapp-react' element={
          <>
            <Banner></Banner>
            <Movies></Movies>
          </>
        }
        ></Route>

        
        <Route path='/fav' element={
            <Favourites></Favourites>
            }
        ></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
   
   
    </BrowserRouter>
     
    </>
  )
}

export default App

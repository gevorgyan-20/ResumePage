import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layout/Layout'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Projects from '../Pages/Projects/Projects'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
)
}

export default AppRouter
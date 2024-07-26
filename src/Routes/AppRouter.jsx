import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../Pages/Layout/Layout'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Projects from '../Pages/Projects/Projects'

const AppRouter = () => {
    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      };

  return (
    <Routes>
        {ScrollToTop()}
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
)
}

export default AppRouter
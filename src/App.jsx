import './App.css'
import Header from './Components/Shared/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Shared/Footer/Footer'
import { useEffect } from 'react'

function App() {

  // const location = useLocation()
  // // console.log(location)

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     document.title = `ToyVerse - Home`
  //   }
  //   else {
  //     document.title = `ToyVerse ${location.pathname.replace('/', '- ')}`
  //   }
  // }, [location.pathname])

  return (
    <div className=''>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App

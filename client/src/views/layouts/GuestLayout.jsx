import React, {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Placeholder from '../components/Placeholder'

function GuestLayout() {
  return (
   <>
    <Navbar />
    <Suspense fallback={<Placeholder />}>
      < Outlet />
    </Suspense>   
    <Footer />
   </>
  )
}

export default GuestLayout
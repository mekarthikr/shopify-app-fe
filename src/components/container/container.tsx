import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../shared'

export const Container: React.FC = () => {
  return (
    <>
    <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

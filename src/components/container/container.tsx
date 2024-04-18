import React from 'react'
import { Outlet } from 'react-router-dom'

export const Container: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

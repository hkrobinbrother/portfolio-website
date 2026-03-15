import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { Outlet } from 'react-router'

export default function DashboardLayOut() {
  return (
    <div className='container mx-auto pt-8 min-h-screen'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-8'>
          {/* Main content */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

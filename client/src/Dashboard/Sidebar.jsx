import React from 'react'
import { Link } from 'react-router'

export default function Sidebar() {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Dashboard Sidebar</h2>
        <ul className='space-y-2'>
         <Link to="/dashboard/projects">
          <li className='hover:bg-gray-700 p-2 rounded'>Projects</li>
         </Link>
        
          <li className='hover:bg-gray-900 p-2 rounded'>Blogs</li>
          <li className='hover:bg-gray-200 p-2 rounded'>Settings</li>
        </ul>
    </div>
  )
}

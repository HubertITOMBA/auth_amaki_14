import HeaderLayout from '@/components/home/HeaderLayout'
import React from 'react'



const layout = ( { children } : {children: React.ReactNode}) => {
  return (
    <div className='h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
        <HeaderLayout />
        { children }
    </div>
  )
}
export default layout
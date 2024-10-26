import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const layout = ( { children } : {children: React.ReactNode}) => {
  return (
    <main className='w-full h-full'>
    <Link href={'/'} className='px-4 sm:px-10 flex items-center space-x-1'>
        <ChevronLeft className='w-8 h-8' />
        <span>Accueil</span>
    </Link>
    <div className='h-full w-full flex justify-center items-center max-sm:px-4'>
        {children}
    </div>
</main>
  )
}

export default layout
"use client"

import React from 'react'


import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Unauthorized = () => {

  return (
    <div className="p-4 text-center h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl md:text-6xl">{`Accès non autorisé !`}</h1>
      <p>{`Veuillez contacter le support pour obtenir l'accès`}</p>
      <Button
        variant={'ghost'}
        className="mt-4 p-2"
        asChild
      >
        <Link href="/" className='underline decoration-solid'>
            {`Retour à l'accueil`}
        </Link>
      </Button>
    </div>
  )
}

export default Unauthorized
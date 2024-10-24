"use client"

import Unauthorized from '@/components/unauthorized'
import { getCurrentUser } from '@/data'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const user = await currentUser()
      
     if (!user || !user.email) redirect("/sign-in")

         const userDetails = await getCurrentUser()

     if(!userDetails) return <Unauthorized />

     if (userDetails.role === "Admin") {

    } else if (userDetails.role === "Membre" && userDetails.Membre) {
      return redirect(`/membre/${userDetails.Membre.id}/profile`)
    } else if( userDetails.role === "Invite") {
      //  return redirect(`/guest/${userDetails.Membre.id}/specialities`)
   }
    return (
      <div>
         <Unauthorized />
      </div>
    
    )
   
}

export default page
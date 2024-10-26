"use server"

import Unauthorized from '@/components/unauthorized'
import { getCurrentUser } from '@/data'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

      const user = await currentUser()
         if (!user || !user.email) redirect("/sign-in")

      const userDetails = await getCurrentUser()
        console.log("USERDETALS",{userDetails});
        

      if(!userDetails) return <Unauthorized />
       console.log("USERDETALS",{userDetails});

     if (userDetails.role === "Admin") {

     //} else if (userDetails.role === "Membre") {
     } else if (userDetails.role === "Membre" && userDetails.Adherent) {
          return redirect(`/adherent/${userDetails.Adherent.id}/profiles`)
     } else if( userDetails.role === "Invite") {
     //  return redirect(`/guest/${userDetails.Membre.id}/specialities`)
     //  return redirect(`/membre/${userDetails.Membre.id}/profiles`)
    }

    return (
      <div>
          {/* <Unauthorized />   */}
          page
       </div>
     )
   
}

export default page
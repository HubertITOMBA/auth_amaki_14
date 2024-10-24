import CreateAdresseMembreForm from '@/components/forms/CreateAdressMembreForm'
import CreateCotisationForm from '@/components/forms/CreateCotisationForm'
import CreateMembreForm from '@/components/forms/CreateMembreForm'
import { getMembre } from '@/data'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        membreId: string

    }
}

const page = async ({ params} : Props) => {

    const user = await currentUser()
    
    if (!user || !user.email) return redirect('/check')

    const currentMembre = await getMembre()   
    
    console.log(user, {currentMembre}, {params});
    
    
    if(currentMembre) return redirect(`/membre/${params.membreId}/profile/${currentMembre}`)

  return (
    <div className='flex items-center justify-center w-full h-screen'>
          <div className=' flex justify-center items-center mt-4'>
              <div className=' max-w-[850px] border p-4 rounded-xl overflow-x-hidden'>
                  <h1 className='sm:text-4xl text-2xl whitespace-nowrap'>
                   Profil d&apos;un nouveau membre 
                  </h1>

                  <CreateMembreForm />
                  <CreateAdresseMembreForm />
                  <CreateCotisationForm />
              </div>
          </div>
      </div>
  )
}

export default page

import CreateAdresseAdherentForm from '@/components/forms/CreateAdressAdherentForm'
import CreateCotisationForm from '@/components/forms/CreateCotisationForm'
import { getAdherent } from '@/data'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import CreateProfileAdherentForm from '@/components/forms/CreateProfileAdherentForm'
import CreateFamilleAdherentForm from '@/components/forms/CreateFamilleAdherent'
import AdherentForm from '@/components/forms/AdherentForm'

type Props = {
    params: {
        adherentId: string

    }
}

const page = async ({ params } : Props) => {

    const user = await currentUser()
    
    if (!user || !user.email) return redirect('/check')

    const currentAdherent = await getAdherent()   
    
    console.log(user, {currentAdherent}, {params});
    
   
   // if(currentAdherent) return redirect(`/adherent/${params.adherentId}/profiles/${currentAdherent}`)

  return (
    <div className='flex items-center justify-center w-full h-screen'>
          <div className=' flex justify-center items-center mt-4'>
              <div className=' max-w-[850px] border p-4 rounded-xl overflow-x-hidden'>
                  <h1 className='sm:text-4xl text-2xl whitespace-nowrap'>
                   Profil de membre 
                  </h1>
                   <CreateProfileAdherentForm />
                   <AdherentForm />
                   <CreateAdresseAdherentForm />
                   <CreateCotisationForm /> 
                   <CreateFamilleAdherentForm />
              </div>
          </div>
          <div className=' flex justify-center items-center mt-4'>
                <h1 className='sm:text-4xl text-2xl whitespace-nowrap'>
                   Donner ma cotisation 
                  </h1>
              <div className=' max-w-[850px] border p-4 rounded-xl overflow-x-hidden'>
                 
                 
              </div>
          </div>

      </div>
  )
}

export default page
import EventSection from '@/components/home/EventSection'
import React from 'react'

const tiers  = [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '/auth/sign-in',
      description: 'All your essential business finances, taken care of.',
      price:  '15',
      features: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
      mostPopular: false,
    },
    {
      name: 'Scale',
      id: 'tier-scale',
      href: '/auth/sign-in',
      description: 'The best financial services for your thriving business.',
      price: '30',
      features: [
        'Advanced invoicing',
        'Easy to use accounting',
        'Mutli-accounts',
        'Tax planning toolkit',
        'VAT & VATMOSS filing',
        'Free bank transfers',
      ],
      mostPopular: true,
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: '/auth/sign-in',
      description: 'Convenient features to take your business to the next level.',
      price: '60',
      features: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts', 'Tax planning toolkit'],
      mostPopular: false,
    },

]



const EventPage = () => {
  return (
    <div>
        <main>
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:*:px-8'>
                <div className='mx-auto max-w-4xl text-center'>
                    <p className='mt-2 text-4xl font-bold tracking-tight sm:text-3xl'>
                    Découvrez nos activités partout dans le monde. <br />
                    Là où les anciens de Kipako évoluent
                    </p>
                </div>

                <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300'>
                 Choisissez parmi nos forfaits abordables et commencez dès aujourd'hui.
                </p>

                <EventSection tiers={tiers} />

            </div>
        </div>
        </main>
    </div>
  )
}

export default EventPage
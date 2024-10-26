"use client"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { LoginButton } from '../auth/login-button'
// import { 
//   Avatar,
//   AvatarImage,
//   AvatarFallback
// } from "@/components/ui/avatar";
// import { UserButton } from '../auth/user-button'
import { FaPeopleArrows, FaUser } from 'react-icons/fa'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: "L'amicale", href: '/amicale' },
  { name: 'Evenements', href: '/evenements' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Contact', href: '/contact' },
]

export default function HeaderLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-background/90O backdrop-blur-lg sticky top-0 z-[999]'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src="/image/amaki_hand_1.webp" width={500} height={500} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6">
              {item.name}
            </Link>
          ))}
        </div>
    
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <LoginButton asChild >
              <FaUser className="text-white" />
           </LoginButton>
        </div> */}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/auth/sign-in" className="text-sm font-semibold leading-6">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        
      </nav>


      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background/900 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src="/image/amaki_hand_1.webp" width={500} height={500} alt="logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {item.name}
                  </Link>
                ))}

                 {/*  <div>
                      <LoginButton asChild >
                      <FaUser className="text-white" />
                      </LoginButton>
                  </div> */}

              </div>
              <div className="py-6">
                <Link
                  href="/auth/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                >
                   Se connecter
                </Link>
              </div>
              
             
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
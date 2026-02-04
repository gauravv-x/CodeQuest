'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UpgradeToPro() {
  return (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-8'>
      <Image src={'/logo.png'} alt='logo' width={100} height={100}/>
      <h2 className='font-game text-3xl'>Upgrade to Pro</h2>
      <p className='font-game text-gray-500 text-xl text-center'>Get access to All Courses by upgrading to Pro.</p>
      <Link href={'/pricing'}>
      <Button className='font-game text-xl' variant={'pixel'} size={'lg'}>Upgrade</Button>
      </Link>
    </div>
  )
}

export default UpgradeToPro
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function InviteFriend() {
  return (
    <div className='flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900'>
        <Image src={'/mail.png'} alt='mail' width={80} height={80} />
        <h2 className='font-game text-3xl'>Invite Friend</h2>
        <p className='font-game'>Having Fun? Share the love with your friend ! Enter an Email and we will send them a personal invite.</p>
        <div className='flex gap-5 mt-5 items-center'> 
            <Input type='email' placeholder='Enter Invite Email' className='border rounded-lg min-w-sm'/>
            <Button variant={'pixel'} className='font-game text-xl'>Invite</Button>
        </div>
    </div>
  )
}

export default InviteFriend
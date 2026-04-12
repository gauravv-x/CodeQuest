import { Button } from '@/components/ui/button'
import React from 'react'

function CommunityHelpSection() {
  return (
    <div className='font-game p-4 border-4 rounded-xl mt-7 flex items-center flex-col gap-4' >
      <h2 className="text-3xl">Need Help?</h2>
      <p className="text-2xl text-center">Ask questions, share your knowledge in ur Community.</p>
      <Button className="text-2xl mt-0" variant={'pixel'} size={'lg'}>Go To Community</Button>

    </div>
  );
}

export default CommunityHelpSection
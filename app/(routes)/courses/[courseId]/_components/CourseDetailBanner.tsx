import React, { useState } from 'react'
import { Course } from '../../_components/CourseList'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'


type Props = {
    loading : boolean,
    courseDetail : Course | undefined,
    refreshData: () => void
}

function CourseDetailBanner({ loading, courseDetail, refreshData }: Props) {

  const [loading_, setloading_ ] = useState(false);
  const EnrollCourse = async() => {
        setloading_(true);
        const result = await axios.post('/api/enroll-course', {
          courseId: courseDetail?.courseId
        })
        console.log(result);
        toast.success('Course Enrolled');
        refreshData();
        setloading_(false);
  } 

  return (
    <div>
        {!courseDetail?
        <Skeleton className='w-full h-[300px] rounded-2xl'/>
        :<div className='relative'>
             <Image src={courseDetail?.bannerImage?.trimEnd()}
        alt={courseDetail?.title}  
        width={1200}
        height={300}
        className='w-full h-[300px] object-cover rounded-2xl'
        
        />       
        <div className='font-game absolute top-0 pt-20 p-10 md:px-24 lg-:px-36 bg-linear-to-r from-black/80 to-white-50/50 h-full'>
          <h2 className='text-6xl'>{courseDetail?.title}</h2>
          <p className='text-3xl text-gray-300 mt-3'>{courseDetail?.desc}</p>
          {!courseDetail?.userEnrolled? <Button className='text-2xl mt-7' variant={'pixel'} size={'lg'} 
          disabled={loading_}
          onClick={EnrollCourse}>
            {loading_ && <Loader2 className='animate-spin'/>}
            Enroll Now</Button>
            :<Button className='text-2xl mt-7' variant={'pixel'} size={'lg'} disabled>Continue Learning...</Button>}

        </div>
        </div>       
    
    }       
       
    </div>
  )
}

export default CourseDetailBanner
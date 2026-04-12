import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Course } from '../../_components/CourseList';

type Props = {
    courseDetail: Course | undefined;

}

function CourseStatus({ courseDetail }: Props) {
    
    const [counts , setCounts] = React.useState<{
        totalExcs:number,
        totalXP:number
    }>()
    useEffect(()=>{
        courseDetail && GetCounts();
    },[courseDetail])

    const GetCounts=()=>{
        let totalExercises = 0;
        let totalXP = 0;
        courseDetail?.chapters?.forEach((chapter)=>{
           totalExercises=totalExercises+chapter?.exercises?.length
           chapter?.exercises?.forEach(exc =>{
                totalXP = totalXP + exc?.xp
           })
        })

        setCounts({
            totalExcs:totalExercises,
            totalXP: totalXP 
        })
    }


  return (
    <div className='font-game p-4 border-4 rounded-xl w-full'>
        <h2 className='text-3xl '>Course Progrss </h2> 
        <div className='flex items-center gap-5 mt-4'>
            <Image src={'/book.png'} alt="Book" width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl'>Exercise 
                    <span className='text-gray-400'>1/{counts?.totalExcs}</span></h2>
                <Progress value={37} className='mt-2'/>
            </div>
        </div>

        <div className='flex items-center gap-5 mt-4'>
            <Image src={'/star.png'} alt="Book" width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl'>XP Earned 
                    <span className='text-gray-400'>1/{counts?.totalXP}</span></h2>
                <Progress value={37} className='mt-2'/>
            </div>
        </div>
        
        </div>
  )
}

export default CourseStatus
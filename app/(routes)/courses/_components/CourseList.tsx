'use client'
import axios from 'axios'
import { ChartNoAxesColumn, ChartNoAxesColumnIncreasingIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

    type Course = {
        id: number;
        courseid: number;
        title: string;
        desc: string;
        level: string;
        bannerImage: string;       
        tag: string;
    }


function CourseList() {


    const [courseList, setCourseList] = useState<Course[]>([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        GetAllCourse();
    }, []);

    const GetAllCourse = async () => {
        setLoading(true);
        const result= await axios.get('/api/course')    
        console.log(result);
        setCourseList(result?.data);
        setLoading(false);
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3'>
        {courseList?.map((course, index) => (
        <div key={index} className='border-4 rounded-xl hover:bg-zinc-900 cursor-pointer'>
            <Image src={(course?.bannerImage).trimEnd()} width={400}
            height={400} alt={course?.title}            
            className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='p-4'>
            <h2 className='font-game text-2xl mt-2'>{course?.title}</h2>
            <p className='font-game text-xl text-gray-400 line-clamp-2'>{course?.desc}</p>

            <h2 className='bg-zinc-800 flex gap-2 font-game p-1 mt-3 rounded-2xl items-center inline-flex'>
                <ChartNoAxesColumnIncreasingIcon className='h-4 w-4'/>
                {course?.level}
            </h2>
            </div>    
        </div>
        ))}
    </div>
  )
}

export default CourseList;
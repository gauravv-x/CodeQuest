import EnrolledCourses from "@/app/(routes)/dashboard/components/EnrolledCourses";
import { db } from "@/config/db";
import { CourseChaptersTable, CoursesTable, EnrolledCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, asc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
        
        const { searchParams } = new URL(req.url);
        const courseId = searchParams.get('courseid');
        const user = await currentUser();

if(courseId){
        const result = await db.select().from(CoursesTable)
                //@ts-ignore
                .where(eq(CoursesTable.courseId, courseId));


        const chapterResult = await db.select().from(CourseChaptersTable)
        //@ts-ignore
        .where(eq(CourseChaptersTable.courseId, courseId));

        const enrolledCourse = await db.select().from(EnrolledCourseTable)
        //@ts-ignore
        .where(and(eq(EnrolledCourseTable?.courseId, courseId),eq(EnrolledCourseTable?.userId, user?.primaryEmailAddress?.emailAddress)));

        const isEnrolledCourse = enrolledCourse.length>0?true:false; 
        return NextResponse.json(
                {
                ...result[0], 
                chapters: chapterResult,
                userEnrolled: isEnrolledCourse,
                courseEnrolledInfo: enrolledCourse[0]
                }
        
        );
}
else{
        
        //Fatch all courses from database
        const result = await db.select().from(CoursesTable).orderBy(asc(CoursesTable.courseId));

        return NextResponse.json(result);
        }

}

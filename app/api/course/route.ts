import { db } from "@/config/db";
import { CourseChaptersTable, CoursesTable } from "@/config/schema";
import { asc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
        
        const { searchParams } = new URL(req.url);
        const courseId = searchParams.get('courseid');

if(courseId){
        const result = await db.select().from(CoursesTable)
                //@ts-ignore
                .where(eq(CoursesTable.courseId, courseId));


        const chapterResult = await db.select().from(CourseChaptersTable)
        //@ts-ignore
        .where(eq(CourseChaptersTable.courseId, courseId));

        return NextResponse.json(
                {
                ...result[0], 
                chapters: chapterResult
                }
        
        );
}
else{
        
        //Fatch all courses from database
        const result = await db.select().from(CoursesTable).orderBy(asc(CoursesTable.courseId));

        return NextResponse.json(result);
        }

}

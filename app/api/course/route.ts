import { db } from "@/config/db";
import { CoursesTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
        
        //Fatch all courses from database
        const result = await db.select().from(CoursesTable);

        return NextResponse.json(result);
}
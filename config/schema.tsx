<<<<<<< HEAD
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
=======
import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";
>>>>>>> 0b2b047 (feat: initialize project with Next.js and Tailwind CSS setup)
import { Tags } from "lucide-react";
import { title } from "process";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscription: varchar(),
});

export const CoursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
<<<<<<< HEAD
  courseid: integer().notNull().unique(),
=======
  courseId: integer().notNull().unique(),
>>>>>>> 0b2b047 (feat: initialize project with Next.js and Tailwind CSS setup)
  title: varchar().notNull(),
  desc: varchar().notNull(),
  bannerImage: varchar().notNull(),
  level: varchar().default('Beginner'),
  tags: varchar(),
<<<<<<< HEAD
=======
});

export const CourseChaptersTable = pgTable("courseChapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chapterId: integer(),
  courseId: integer().notNull(),
  name: varchar(),  
  desc: varchar(),
  exercises: json(),
>>>>>>> 0b2b047 (feat: initialize project with Next.js and Tailwind CSS setup)
});
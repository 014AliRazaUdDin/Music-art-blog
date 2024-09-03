"use client"
import React from "react"

import courseData from '../data/music_course.json'
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
interface Course{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  is_featured: boolean,
}

function FeaturesCourses() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.is_featured)
  return (
    <div className="py-12 bg-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-teal-500 font-semibold tracking-wide uppercase text-base">Featured Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">Learn with the best</p>
        </div>
      </div>
      <div className="mt-10 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
                  {featuredCourses.map((course:Course) => (
                    <div key={course.id}
                    className="flex justify-center ">
                      <BackgroundGradient className="flex flex-col rouded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm rounded-3xl">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                          <p className="text-3xl font-bold">{course.title}</p>
                          <p>{course.description}</p>
                          <Link href={`/courses/${course.slug}`} className="text-sm text-gray-500 font-light">
                          {course.instructor}
                          </Link>
                        </div>
                      </BackgroundGradient>
                    </div>
                  ))}
          </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} className="px-4 py-2 bg-white text-neutral-600 border-none rounded outline-none hover:bg-neutral-200 duration transition-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturesCourses

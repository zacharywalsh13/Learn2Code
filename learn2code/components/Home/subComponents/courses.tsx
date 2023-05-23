"use client";
import { courseList, userId } from "./courseData";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Courses() {
  const router = useRouter();

  const [activeCourses, setActiveCourses] = useState<
    { course: string; percentage: number }[]
  >([]);

  useEffect(() => {
    const fetchActiveCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/users/${userId}/activeCourses`
        );
        if (response.ok) {
          const data = await response.json();
          setActiveCourses(data.coursesActive);
          console.log(data.coursesActive);
        }
      } catch (error) {
        console.error("Error fetching active courses", error);
      }
    };
    fetchActiveCourses();
  }, [userId]);

  const handleCourseClick = async (courseId: string, courseTitle: string) => {
    try {
      const response = await fetch(
        "http://localhost:3001/addCourse/addCourse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, courseId }),
        }
      );

      if (response.ok) {
        console.log(`Course: ${courseTitle} added successfully`);
        router.push(`Courses/${courseTitle}/Intro`);
      } else {
        console.log("Failed to add course");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error adding course: ${error.message}`);
      }
    }
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courseList.map((course) => {
        const activeCourse = activeCourses.find(
          (ac) => ac.course === course.title
        );

        return (
          // <Link href = {`${course.title}`}>
          <button
            key={course.id}
            className={`relative border-2 border-blue-500 rounded-lg p-5 bg-white shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105
            ${activeCourse ? "bg-red-500" : ""}`}
            onClick={() => handleCourseClick(course.title, course.title)}
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p>{course.description}</p>
            <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1 rounded-br-lg">
              {activeCourse ? `${activeCourse.percentage}%` : "Start!"}
            </span>
          </button>
          // </Link>
        );
      })}
    </div>
  );
}

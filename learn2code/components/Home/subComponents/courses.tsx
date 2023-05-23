"use client";
import { courseList } from "./courseData";
import {useState, useEffect, use} from 'react';

export default function Courses() {
const [activeCourses, setActiveCourses] = useState([]);
const userId = '646ce3ad90495edacdb3df79';

useEffect(() => {
  const fetchActiveCourses = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}/activeCourses`)
      if (response.ok) {
        const data = await response.json();
        setActiveCourses(data.activeCourses);
      }
    } catch (error) {
      console.error('Error fetching active courses', error);
    }
  }
  fetchActiveCourses();
}, [userId]);
  const handleCourseClick = async (courseId: number, courseTitle: string) => {
    // Replace with actual user id
    try {
      const response = await fetch('http://localhost:3001/addCourse/addCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, courseId })
      });

      if(response.ok) {
        console.log(`Course: ${courseTitle} added successfully`);
      } else {
        console.log('Failed to add course');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error adding course: ${error.message}`);
      }
  };
}

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courseList.map((course) => (
        <button 
          key={course.id} 
          className="border-2 border-blue-500 rounded-lg p-5 bg-white shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
          onClick={() => handleCourseClick(course.id, course.title)}
        >
          <h2 className="text-xl font-bold mb-2">{course.title}</h2>
          <p>{course.description}</p>
        </button>
      ))}
    </div>
  );
}

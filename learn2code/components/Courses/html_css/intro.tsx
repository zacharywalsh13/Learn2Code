"use client";
import { useState } from 'react';

export default function HtmlCssBeginnersCourseIntro() {
    
    const lessons = [
        { number: 1, title: "Introduction to HTML", description: "Learn the basics of HTML." },
        { number: 2, title: "Basic HTML Structure", description: "Understand how to structure a basic HTML document." },
        { number: 3, title: "HTML Lists", description: "Discover how to create lists in HTML." },
        { number: 4, title: "HTML Links and Anchors", description: "Learn how to create hyperlinks and anchors in HTML." },
        { number: 5, title: "HTML Images", description: "Learn how to embed images into your HTML documents." },
        { number: 6, title: "HTML Tables", description: "Discover how to create and structure tables in HTML." },
        { number: 7, title: "HTML Forms", description: "Understand how to create interactive forms in HTML." },
        { number: 8, title: "Introduction to CSS", description: "Learn the basics of Cascading Style Sheets." },
        { number: 9, title: "CSS Selectors", description: "Discover how to target HTML elements with CSS selectors." },
        { number: 10, title: "CSS Box Model", description: "Understand the CSS box model and how to control layout." },
        { number: 11, title: "CSS Positioning", description: "Learn different positioning methods in CSS." },
        { number: 12, title: "CSS Flexbox", description: "Discover the power of flexible box layouts with CSS Flexbox." },
        { number: 13, title: "CSS Grid", description: "Master grid-based layouts with CSS Grid." },
        { number: 14, title: "Responsive Design with CSS", description: "Learn how to create responsive designs that work on various screen sizes." },
        { number: 15, title: "Final Project", description: "Apply what you've learned to build a complete webpage." }
    ];
    

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center">HTML & CSS for Beginners</h1>
            <h2 className="text-2xl font-bold mt-5">Course Introduction</h2>
            <p className="mt-5">Welcome to HTML & CSS for Beginners! This course is designed to provide a comprehensive introduction to the basics of HTML (HyperText Markup Language) and CSS (Cascading Style Sheets), two of the core technologies for building web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along the way, you will also learn about the guidelines and best practices for creating efficient and accessible web pages.</p>
            <h2 className="text-2xl font-bold mt-5">Table of Contents</h2>
            <ul className="list-decimal ml-5">
                {lessons.map((lesson, index) => (
                    <li key={index} className="mt-2">
                        <strong>Lesson {lesson.number}: {lesson.title}</strong>
                        <p>{lesson.description}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-5">
                
                <button className="px-5 py-2 bg-blue-600 text-white rounded">Continue</button>
            </div>
        </div>
    );
}
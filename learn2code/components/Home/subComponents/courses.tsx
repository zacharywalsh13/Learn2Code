"use client"
export default function Courses() {
  // Course data
  const courses = [
    { 
      id: 1, 
      title: 'HTML & CSS for Beginners', 
      description: 'Dive into web development with this comprehensive course on the fundamentals of HTML and CSS. Learn how to structure web pages and style them to your liking. No prior experience needed - perfect for beginners!' 
    },
    { 
      id: 2, 
      title: 'JavaScript Basics', 
      description: 'Discover the power of JavaScript, the language that powers the interactive web. From variables to events and functions, learn everything you need to start creating dynamic and interactive websites.' 
    },
    { 
      id: 3, 
      title: 'React for Frontend Development', 
      description: 'Immerse yourself in the world of React.js, the powerful JavaScript library for building user interfaces. Learn how to create dynamic web applications, manage state, and interact with APIs.' 
    },
    { 
      id: 4, 
      title: 'Node.js for Backend Development', 
      description: 'Master the art of server-side programming with Node.js, a platform built on Chrome\'s JavaScript runtime. Learn how to build fast and scalable network applications, connect to databases, and manage user authentication.' 
    },
    { 
      id: 5, 
      title: 'Full Stack Development with MERN', 
      description: 'Get the best of both front-end and back-end development with this comprehensive course on the MERN stack. Learn how to build robust, full-stack applications using MongoDB, Express.js, React.js, and Node.js.' 
    },
    { 
      id: 6, 
      title: 'Angular: From Beginner to Advanced', 
      description: 'Step into the world of Angular, a powerful platform for building complex web applications. Learn about components, services, directives, and more, and how to use them to build robust applications.' 
    },
    { 
      id: 7, 
      title: 'Vue.js for Rapid Prototyping', 
      description: 'Fast-track your web development skills with Vue.js, a lightweight and easy-to-learn JavaScript framework. Discover how to build single-page applications, manage state, and create reusable components.' 
    },
    { 
      id: 8, 
      title: 'Web Design for Developers', 
      description: 'Bridge the gap between design and development with this comprehensive guide. Learn how to create user-friendly, aesthetically pleasing websites, and understand the principles of good design.' 
    },
    { 
      id: 9, 
      title: 'Responsive Web Design', 
      description: 'Adapt to the modern web with this course on responsive web design. Learn how to make websites that look good and function well on any device, from desktops to smartphones.' 
    }
];


  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <button 
          key={course.id} 
          className="border-2 border-blue-500 rounded-lg p-5 bg-white shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
          onClick={() => console.log(`Navigating to course: ${course.title}`)}
        >
          <h2 className="text-xl font-bold mb-2">{course.title}</h2>
          <p>{course.description}</p>
        </button>
      ))}
    </div>
  );
}

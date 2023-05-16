"use client"
export default function Courses() {
  // Course data
  const courses = [
    { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript, the most popular programming language.' },
    { id: 2, title: 'HTML & CSS for Beginners', description: 'Get started with web development by learning the basics of HTML and CSS.' },
    { id: 3, title: 'React for Frontend Development', description: 'Learn to build dynamic and modern web applications using React.js.' },
    { id: 4, title: 'Node.js for Backend Development', description: 'Understand how to build scalable backend services using Node.js.' },
    { id: 5, title: 'Full Stack Development with MERN', description: 'Master the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack web development.' },
    { id: 6, title: 'Angular: From Beginner to Advanced', description: 'Learn Angular to develop robust, complex and scalable web applications.' },
    { id: 7, title: 'Vue.js for Rapid Prototyping', description: 'Get started with Vue.js, a lightweight and intuitive JavaScript framework.' },
    { id: 8, title: 'Web Design for Developers', description: 'Understand the principles of good design to create aesthetically pleasing websites.' },
    { id: 9, title: 'Responsive Web Design', description: 'Learn to design websites that look and work well on desktops, tablets, and mobile devices.' }
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

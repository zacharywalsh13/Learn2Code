export default function Testimonials() {
    // Sample testimonial data
    const testimonials = [
      { 
        id: 1, 
        name: 'Alice', 
        feedback: 'The courses here are amazing. They provide a comprehensive understanding of the subject matter, offering a balance of theory and practical exercises. The interactive nature of the course allows for a deep dive into the content, ensuring that I could apply what I learned immediately. I cannot recommend them enough!' 
      },
      { 
        id: 2, 
        name: 'Bob', 
        feedback: 'Best coding platform ever. The structure of the courses is excellent, gradually building up from the basics to more complex topics. The instructors are knowledgeable and explain the concepts clearly. The community is also very helpful and supportive. Highly recommended!' 
      },
      { 
        id: 3, 
        name: 'Charlie', 
        feedback: 'I was new to coding, but the beginner courses set me up perfectly. The examples were relevant and the resources for further learning incredibly helpful. The pace was just right, allowing me to progress at my own speed without feeling overwhelmed. A fantastic learning experience!' 
      },
      { 
        id: 4, 
        name: 'Dana', 
        feedback: 'I wanted to transition into a career in web development, and these courses were instrumental in achieving that. The full-stack development course particularly stood out, providing a holistic view of backend and frontend development. I now feel confident to apply for developer roles. Thank you!' 
      },
      { 
        id: 5, 
        name: 'Eva', 
        feedback: 'I love the hands-on approach of the courses. The projects at the end of each course helped me apply what I learned and build a portfolio. The instructors were always available for doubts, and the community was incredibly supportive. An excellent platform for anyone looking to learn coding.' 
      },
      { 
        id: 6, 
        name: 'Frank', 
        feedback: 'The courses are very detailed and well-structured, making complex concepts easy to understand. The practical exercises and projects allowed me to gain real-world coding experience. It’s the best investment I’ve made in my coding journey. Fantastic experience!' 
      },
    ];
    
  
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-center">What Our Students Say</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-5 rounded">
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default function Testimonials() {
    // Sample testimonial data
    const testimonials = [
      { id: 1, name: 'Alice', feedback: 'The courses here are amazing. I learned so much!' },
      { id: 2, name: 'Bob', feedback: 'Best coding platform ever. Highly recommended!' },
      // Add more testimonials...
    ];
  
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-center">What Our Students Say</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-5">
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
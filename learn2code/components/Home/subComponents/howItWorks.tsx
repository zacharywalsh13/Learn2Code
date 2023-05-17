export default function HowItWorks() {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-center text-blue-500">How It Works</h2>
      <div className="mt-5 flex justify-around items-center">
        <div className="text-center">
          <h3 className="font-bold">1. Sign Up</h3>
          <p>Create an account to get started.</p>
        </div>
        <div className="mx-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div className="text-center">
          <h3 className="font-bold">2. Choose a Course</h3>
          <p>Pick a course that suits your interests and goals.</p>
        </div>
        <div className="mx-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div className="text-center">
          <h3 className="font-bold">3. Learn and Interact</h3>
          <p>Complete lessons, work on projects, and interact with other learners.</p>
        </div>
      </div>
    </div>
  );
}

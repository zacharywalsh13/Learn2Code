export default function Hero() {
  return (
    <div className="relative bg-white py-20 flex items-center justify-center text-gray-900">
      <div className="relative z-10 text-center p-10">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Learn to Code, Change Your Life</h1>
        <p className="text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Master coding with our comprehensive and interactive online courses</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-shadow duration-200">Get Started</button>
      </div>
    </div>
  );
}

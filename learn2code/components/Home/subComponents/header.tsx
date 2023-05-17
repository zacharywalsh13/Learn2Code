import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-5">
      <div className="text-white text-2xl font-bold">
        Learn2Code
      </div>
      <div className="flex items-center">
        <input
          className="rounded-md px-4 py-2 mr-4 border-2 border-white focus:outline-none"
          type="text"
          placeholder="Search courses..."
        />
        <Link href="/login" className="bg-white text-blue-500 rounded-md px-4 py-2">
          Sign In
        </Link>
      </div>
    </header>
  );
}

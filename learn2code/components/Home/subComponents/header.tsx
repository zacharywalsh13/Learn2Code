"use client";
import { useSelector, useDispatch } from 'react-redux';
import { UserState, login } from '../../../lib/redux/userSlice';
import Link from 'next/link';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user);
  const isLoggedIn = user?.id !== null; // or however you define logged in state

  const handleLogout = () => {
    dispatch(login({
      id: null,
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      coursesActive: [],
      coursesCompleted: [],
    }));
  }

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
        {isLoggedIn ? (
          <>
            <div className="text-white mr-4">Welcome, {user.username}</div>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-500 rounded-md px-4 py-2"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-white text-blue-500 rounded-md px-4 py-2">
           Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

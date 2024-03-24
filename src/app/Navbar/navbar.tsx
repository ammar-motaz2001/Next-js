import Link from 'next/link';
import ToggleMode from '../ToggleMode';
import { SignIn, UserButton, auth } from '@clerk/nextjs';

function Navbar() {
  const { userId } = auth();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap flex-row md:flex items-center justify-between mx-auto pt-4 p-3">
        <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc924ce3b33.8538265315644613488447-removebg-preview.png" className="h-16 pb-2" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="inline-block md:hidden">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </label>
        <div className={`w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/Popular" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Popular</Link>
            </li>
            <li>
              <Link href="/Upcoming" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Upcoming</Link>
            </li>
            <li>
              <Link href="/TopRated" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Top Rated</Link>
            </li>
            <li>
              <Link href="/NowPlaying" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Now Playing</Link>
            </li>
            <li className='mb-2'>
              <ToggleMode />
            </li>
            {userId ? <UserButton /> : <Link href={'../sign-in'}>Sign in</Link>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

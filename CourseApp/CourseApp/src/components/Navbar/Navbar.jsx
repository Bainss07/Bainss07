
import {useState} from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
const Navbar = () => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">
          <span className="font-semibold">Course</span>Arena
        </div>
        <div className="hidden md:flex space-x-8 text-xl">
          <a href="#" className="text-gray-800 hover:text-gray-800 transition duration-200">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gray-800 transition duration-200">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 transition duration-200">Contact</a>
        </div>
        <div className='flex gap-4'>
         <button
        onClick={() => setLoginModalOpen(true)}
        className="px-6 py-2 text-white  text-lg bg-purple-950 rounded"
      >
        Login
      </button>
      <button
        onClick={() => setRegisterModalOpen(true)}
        className="px-6 py-2 text-white  text-lg bg-purple-950 rounded"
      >
        Register
      </button>
      </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zM3 10h14a1 1 0 110 2H3a1 1 0 110-2zM3 15h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <Login isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <Register isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />
    </nav>
  );
};

export default Navbar;

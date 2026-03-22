import { Link } from 'react-router-dom';
import Icon from '../assets/icon.svg?react';
import { FaCartShopping } from 'react-icons/fa6';
export default function NavigationBar() {
  return (
    <>
      <header className="px-4 py-4 border border-b-2 border-gray-200">
        <div className="max-w-200 m-auto flex justify-between items-center">
          <div className="flex justify-start items-center gap-1 ">
            <p className="w-8 h-8">
              <Icon className="w-full h-full " />
            </p>
            <h3 className="text-black text-xl font-bold font-josefin tracking-tight mt-1">Doggy Stickers</h3>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6">
              <Link to={'/card'}>
                <FaCartShopping className="w-6 h-6 text-purple-800" />
              </Link>
            </div>
            <div>
              <Link to={'/login'}>
                <p className="px-4 py-2 bg-[#F5F3FF] text-purple-700 font-semibold  font-josefin hover:bg-purple-700 hover:text-[#F5F3FF] transition-colors duration-300 rounded-xs">
                  Sign in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

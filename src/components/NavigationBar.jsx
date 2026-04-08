import { Link } from 'react-router-dom';
import Icon from '../assets/icon.svg?react';
import { FaCartShopping } from 'react-icons/fa6';
import { useAuthContext } from '@/context/AuthProvider';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from './ui/button';
export default function NavigationBar() {
  const { user, loading, logout } = useAuthContext();

  if (loading) {
    return <p className="font-josefin text-2xl text-center">Loading...</p>;
  }

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
              {user ? (
                <HoverCard openDelay={10} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Button className="px-4 py-2 bg-[#F5F3FF] text-purple-700 font-semibold  font-josefin hover:bg-purple-700 hover:text-[#F5F3FF] transition-colors duration-300 rounded-xs">
                      {user?.username}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="flex w-25 flex-col gap-0.5">
                    {user?.role === 'admin' ? (
                      <Link to={'/admin/users'} className="font-semibold font-josefin">
                        My Profile
                      </Link>
                    ) : (
                      <Link to={'/user/my-profile'} className="font-semibold font-josefin">
                        My Profile
                      </Link>
                    )}
                    <Link onClick={logout} className="font-semibold font-josefin">
                      Logout
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              ) : (
                <Link to={'/login'}>
                  <p className="px-4 py-2 bg-[#F5F3FF] text-purple-700 font-semibold  font-josefin hover:bg-purple-700 hover:text-[#F5F3FF] transition-colors duration-300 rounded-xs">
                    Sign in
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

'use server';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button/Button';
import MainResults from './components/main-results/MainResults';
// import { getServerSession } from 'next-auth';

// import Button from '@/components/ui/button/Button';
// import MainResults from '@/components/main-results/MainResults';
// import SignOut from '@/components/auth/SignOut';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import Avatar from '../ui/avatar/Avatar';

const Header = async () => {
  // const session = await getServerSession(authOptions);

  return (
    <header className='fixed flex items-center w-full min-h-[45px] py-2 border-b border-b-neutral-700 z-50 backdrop-blur'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center gap-4 cursor-pointer'>
            <MainResults />
          </Link>

          <div className='flex items-center gap-4'>
            <Link className='w-full px-3 py-2 hover:text-neutral-500' href='/signin'>
              Sign In
            </Link>
            <Link href='/signup'>
              <Button variant='primary'>Save</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <Button variant='secondary'>Sign In</Button> */
}
{
  /* {session ? (
            <div className='flex items-center'>
              <SignOut />
              <Link className='block w-8 h-8 bg-neutral-800 rounded-full border border-neutral-700 overflow-hidden' href='/profile'>
                <Avatar imageUrl={session?.user?.image} />
              </Link>
            </div>
          ) : (
            <div className='flex'>
              <Link href='/signin'>
                <Button variant='secondary'>Sign in</Button>
              </Link>
              <Link href='/signup'>
                <Button variant='primary'>Sign up</Button>
              </Link>
            </div>
          )} */
}

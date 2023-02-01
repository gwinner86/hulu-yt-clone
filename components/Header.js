import Image from 'next/image'
import React from 'react'
import { HiOutlineHome,HiOutlineLightningBolt,HiOutlineBadgeCheck,HiOutlineSearch,HiOutlineCollection,HiOutlineUser } from "react-icons/hi";
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
       <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem title='Home' Icon={HiOutlineHome} />
          <HeaderItem title='Trending' Icon={HiOutlineLightningBolt} />
          <HeaderItem title='Verified' Icon={HiOutlineBadgeCheck} />
          <HeaderItem title='Collection' Icon={HiOutlineCollection} />
          <HeaderItem title='Search' Icon={HiOutlineSearch} />
          <HeaderItem title='Account' Icon={HiOutlineUser} />
       </div>
       <Image
       className='object-contain text-white'
        src='/images/logo.png'
        width={100}
        height={100}
        alt=''
       />
    </header>
  )
}

export default Header
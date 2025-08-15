import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex flex-1 justify-items-center ml-4 gap-2 justify-items-center mx-auto px-2 md:mr-0'>
      <Image src={'/camhieplong.svg'} width={36} height={36} alt='camhieplong-brand' />
      <p className='text-2xl font-bold hidden md:block'>CamHiepLong</p>
    </Link>
  )
}

export default Logo
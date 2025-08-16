import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-4 mr-4 md:mr-0'>
        <Image src={'/camhieplong.svg'} width={36} height={36} alt='brand'/>
        <p className='text-xl md:text-2xl font-bold'>CamHiepLong</p>
    </Link>
  )
}

export default Logo
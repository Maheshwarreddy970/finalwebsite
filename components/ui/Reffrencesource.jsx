import { Facebook, GoogleIcon, Linkedin, TwitterIcon } from '@/icons/socialicons';
import Image from 'next/image';
import React from 'react';

const logos = {
  Twitter: <TwitterIcon size={24} />,
  Facebook: <Facebook className='h-7 w-7 mr-2' />,
  Linkedin: <Linkedin size={24} />,
  Instagram: <Image src='/Instagram_logo_2016.svg.png' alt='instagram' height={24} width={24} className='h-7 w-7 mr-2' />,
  direct: <GoogleIcon></GoogleIcon>
};

export default function ReferenceSource({ name }) {
  return <div className=' flex justify-center items-center'>{logos[name] || null}</div>; // Render the logo if found, else null
}
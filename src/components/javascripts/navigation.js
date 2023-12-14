'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar(props) {
    const [nganhDropdownStatus, setNganhDropdown] = useState(false);

    const toggleNganhDropdown = () => {
        setNganhDropdown(!nganhDropdownStatus);
    };
    
    return (
<nav className='bg-slate-500 p-4'>
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <Link href={'/'}>
                <Image src={'/images/xclogo.png'} width={75} height={75} alt='Doan Xavie Can Logo' />
            </Link>
        </div>
        <ul className='flex justify-end'>
            <li className='mr-4 flex items-center hover:underline'>
                <Link href='/' className='text-white'>Home</Link>
            </li>
            <li className='mr-4 flex items-center hover:underline'>
                <Link href={'/about'} className='text-white'>About Us</Link>
            </li>
            <li className='group relative hover:underline mr-4 flex items-center'>
                <a className='text-white cursor-pointer'>Nganh</a>
                <ul className="dropdown-menu hidden absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-700 text-white group-hover:block">
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/nganh/au-nhi'}>Au Nhi</Link>
                    </li>
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/nganh/thieu-nhi'}>Thieu Nhi</Link>
                    </li>
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/nganh/nghia-si'}>Nghia Si</Link>
                    </li>
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/nganh/hiep-si'}>Hiep Si</Link>
                    </li>
                    <li className='flex block px-4 py-2 hover:underline'>
                        <Link href={'/nganh/hiep-si-truong-thanh'}>Hiep Si Truong Thanh</Link>
                    </li>
                    <li className='flex block px-4 py-2 hover:underline'>
                        <Link href={'/nganh/huynh-truong'}>Huynh Truong</Link>
                    </li>
                </ul>
            </li>
            <li className='group relative hover:underline mr-4 flex items-center'>
                <a className='text-white cursor-pointer'>Resources</a>
                <ul className="dropdown-menu hidden absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-700 text-white group-hover:block">
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'https://veym.net/'}>VEYM Website</Link>
                    </li>
                    {/* <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/Link2'}>Link2</Link>
                    </li> */}
                </ul>
            </li>
            <li className='group relative hover:underline mr-4 flex items-center'>
                <a className='text-white cursor-pointer'>Extras</a>
                <ul className=" dropdown-menu hidden absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-700 text-white group-hover:block">
                    <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/extras/gallery'}>Gallery</Link>
                    </li>
                    {/* <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                        <Link href={'/extras/'}>Link2</Link>
                    </li> */}
                </ul>
            </li>
        </ul>
    </div>
</nav>
    )
}
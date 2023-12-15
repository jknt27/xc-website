'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { basePath } from '../../../next.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [nganhOpen, setNganhOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [extrasOpen, setExtrasOpen] = useState(false);
    

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleNganh = () => {
        setNganhOpen(!nganhOpen);
    }

    const toggleResources = () => {
        setResourcesOpen(!resourcesOpen);
    }

    const toggleExtras = () => {
        setExtrasOpen(!extrasOpen);
    }
    
    return (
<nav className='bg-slate-500 p-4'>
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <Link href={'/'}>
                <Image src={`${basePath}/images/xclogo.png`} width={75} height={75} alt='Doan Xavie Can Logo' />
            </Link>
        </div>
        <div className='z-10 flex justify-end text-white text-3xl'>
            <button className='md:hidden' onClick={toggleNav}>
                {isOpen ? <FontAwesomeIcon icon={faTimes} size="2x"></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>}
            </button>
            <ul className={`md:flex ${isOpen ? 'flex-row bg-slate-600 z-10 block px-2 py-2 mt-14 absolute' : 'hidden'}`}>
                <li className={'mx-4 flex items-center highlight-text'}>
                    <Link href='/' className='text-white'>Home</Link>
                </li>
                <li className={`mx-4 flex items-center highlight-text ${isOpen ? 'pt-3' : ''}`}>
                    <Link href={'/about'} className='text-white'>About Us</Link>
                </li>
                <li className={`group relative highlight-text mx-4 flex items-center ${isOpen ? 'pt-3' : ''}`}>
                    <button className='text-white' onClick={toggleNganh}>Nganh</button>
                    <ul className={`md:group-hover:block dropdown-menu cursor-pointer absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-800 text-white px-2 ${nganhOpen ? '' : 'hidden'}`}>
                        <li className='flex block px-4 py-3 whitespace-nowrap highlight-text'>
                            <Link href={'/nganh/au-nhi'}>Au Nhi</Link>
                        </li>
                        <li className='flex block px-4 py-3 whitespace-nowrap highlight-text'>
                            <Link href={'/nganh/thieu-nhi'}>Thieu Nhi</Link>
                        </li>
                        <li className='flex block px-4 py-3 whitespace-nowrap highlight-text'>
                            <Link href={'/nganh/nghia-si'}>Nghia Si</Link>
                        </li>
                        <li className='flex block px-4 py-3 whitespace-nowrap highlight-text'>
                            <Link href={'/nganh/hiep-si'}>Hiep Si</Link>
                        </li>
                        <li className='flex block px-4 py-3 highlight-text'>
                            <Link href={'/nganh/hiep-si-truong-thanh'}>Hiep Si Truong Thanh</Link>
                        </li>
                        <li className='flex block px-4 py-3 highlight-text'>
                            <Link href={'/nganh/huynh-truong'}>Huynh Truong</Link>
                        </li>
                    </ul>
                </li>
                <li className={`group relative highlight-text mx-4 flex items-center ${isOpen ? 'pt-3' : ''}`}>
                    <button className='text-white cursor-pointer' onClick={toggleResources}>Resources</button>
                    <ul className={`md:group-hover:block dropdown-menu cursor-pointer absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-800 text-white ${resourcesOpen ? '' : 'hidden'}`}>
                        <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                            <Link href={'https://veym.net/'}>VEYM Website</Link>
                        </li>
                        {/* <li className='flex block px-4 py-2 whitespace-nowrap hover:underline'>
                            <Link href={'/Link2'}>Link2</Link>
                        </li> */}
                    </ul>
                </li>
                <li className={`group relative highlight-text mx-4 flex items-center ${isOpen ? 'pt-3' : ''}`}>
                    <button className='text-white cursor-pointer' onClick={toggleExtras}>Extras</button>
                    <ul className={`md:group-hover:block dropdown-menu cursor-pointer absolute left-1/2 transform -translate-x-1/2 top-full bg-gray-800 text-white ${extrasOpen ? '' : 'hidden'}`}>
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
    </div>
</nav>
    )
}
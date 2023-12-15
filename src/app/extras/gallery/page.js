import Image from 'next/image'
import { basePath } from '../../../../next.config'

export default function GalleryPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
            <h1 className='font-bold'>Gallery</h1>
            <div className="container">
                <div className="flex flex-col justify-left">
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">Christmas 2023</h3>
                        <a href='' className="underline">Insert Link Here</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">Tuyen Hua Tuyen Uy & Tro Ta</h3>
                        <a href='' className="underline">Insert Link Here</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex font-bold">Bon Mang 2023</h3>
                        <Image src={`${basePath}/images/Doan/XC-1.jpeg`} alt='Doan Xavie Can Bon Mang 2023' width={1080} height={720} unoptimized={true}></Image>
                        <a href='https://www.facebook.com/media/set/?vanity=Xaviecan&set=a.738922858275242' className='underline'>View on: Facebook</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">Halloween</h3>
                        <a href="" className="underline">Insert Link Here</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">Trai Doan 2023: Ve Nguon II</h3>
                        <Image src={`${basePath}/images/Doan/traidoan2023-1.jpg`} alt='Doan Xavie Can Bon Mang 2023' width={1080} height={720} unoptimized={true}></Image>
                        <a href='https://photos.app.goo.gl/1WKR42aZiMtCiQwV6' className='underline'>View on: Google Photos</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">DTDP Camp 2023: Hiep Nhat IV</h3>
                        <Image src={`${basePath}/images/DTDP/dtdpcamp2023-1.jpeg`} alt='Doan Xavie Can' width={1080} height={720} unoptimized={true}></Image>
                        <a href='https://photos.app.goo.gl/5UoMbK838jng4R619' className='underline'>View on: Google Photos</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">2023 May 21 XC Field Day</h3>
                        <a href='https://photos.app.goo.gl/nTTTJsTP4fwfGmUN7' className='underline'>View on: Google Photos</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">2023 Stardew Valley Thieu Nhi Retreat</h3>
                        <a href='https://www.facebook.com/media/set/?set=a.696345962532932&type=3' className='underline'>View on: Facebook</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">2023 Overcooked Nghia Si Retreat</h3>
                        <a href='https://www.facebook.com/media/set/?set=a.696104605890401&type=3' className='underline'>View on: Facebook</a>
                    </div>
                    <div className='pt-3 md:pt-10'>
                        <h3 className="flex">2023 Spirited Away Hiep Si Retreat</h3>
                        <a href='https://www.facebook.com/media/set/?set=a.696071605893701&type=3' className='underline'>View on: Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
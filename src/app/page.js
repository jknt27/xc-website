import Image from 'next/image'
import { basePath } from '../../next.config'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
      <div className="relative flex place-items-center">
          <div className='flex-wrap text-center justify-center'>
          <Image
              className=""
              src={`${basePath}/images/xclogo.png`}
              alt="Xavie Can Logo"
              width={200}
              height={200}
              priority
              unoptimized={true}
          />
          </div>
      </div>
      <div className='text-center'>
          <h1 className='font-bold'>Đoàn Xaviê Cần</h1>
          <h3 className=''>Ignatius of Loyola League of Chapters</h3>
          <h3 className=''>Vietnamese Eucharistic Youth Movement in the USA</h3>
      </div>
      <div className='flex flex-wrap justify-center pt-5'>
        <Image src={`${basePath}/images/Doan/XC-1.jpeg`} alt='Doan Xavie Can' width={1920} height={1080} unoptimized={true}></Image>
        <Image src={`${basePath}/images/Doan/XC-2.jpg`} alt='Doan Xavie Can' width={1920} height={1080} unoptimized={true}></Image>
        <Image src={`${basePath}/images/Doan/XC-3.jpeg`} alt='Doan Xavie Can' width={1920} height={1080} unoptimized={true}></Image>
      </div>
    </main>
  )
}

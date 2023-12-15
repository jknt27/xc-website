import Image from 'next/image'
import { basePath } from '../../../../next.config'

export default function NghiaSi() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
            <h1 className='font-bold'>Nghĩa Sĩ</h1>
            <h3 className='font-semibold italic'>Chinh Phục!</h3>
            <div className='flex-wrap text-center justify-center pt-8'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={`${basePath}/images/NS/NS-1.jpeg`}
                alt="Xavie Can NS"
                width={1920}
                height={1080}
                priority
                unoptimized={true}
            />
            </div>
        </div>
    )
}
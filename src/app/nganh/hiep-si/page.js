import Image from 'next/image'
import { basePath } from '../../../../next.config'

export default function HiepSi() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
            <h1 className='font-bold'>Hiệp Sĩ</h1>
            <h3 className='font-semibold italic'>Dấn Thân!</h3>
            <div className='flex-wrap text-center justify-center pt-8'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={`${basePath}/images/HS/HS-1.jpeg`}
                alt="Xavie Can HS"
                width={6042}
                height={4024}
                priority
                unoptimized={true}
            />
            </div>
        </div>
    )
}
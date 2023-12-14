import Image from 'next/image'

export default function AuNhi() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
            <h1 className='font-bold'>Hiệp Sĩ Trưởng Thành</h1>

            <div className='flex-wrap text-center justify-center pt-8'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/images/HSTT/HSTT-1.jpeg"
                alt="Xavie Can HS"
                width={1920}
                height={1080}
                priority
                unoptimized={true}
            />
            </div>
        </div>
    )
}
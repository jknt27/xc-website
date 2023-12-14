import Image from 'next/image'

export default function AuNhi() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-8 min-h-full">
            <h1 className='font-bold'>Huynh Trưởng</h1>
            <h3 className='font-semibold italic'>Phụng Sự!</h3>
            <div className='flex-wrap text-center justify-center pt-8'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/images/HT/HT-1.jpg"
                alt="Xavie Can HT"
                width={1000}
                height={1000}
                priority
                unoptimized={true}
            />
            </div>
        </div>
    )
}
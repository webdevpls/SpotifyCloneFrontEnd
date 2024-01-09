import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Fullscreen, Maximize, Maximize2} from 'lucide-react'

import Image from "next/image";

export function Hero() {
    return(
        <main className="flex-1 p-6">
        <div className='flex items-center gap-4'>
          <button className='rounded-full bg-black/20 p-1'>
            <ChevronLeft/>
          </button>
          <button className='rounded-full bg-black/20 p-1'>
            <ChevronRight/>
          </button>
        </div>


        <h1 className='font-semibold text-4xl mt-10'>Good Afternon</h1>

        <div className='grid grid-cols-3 gap-6 mt-4'>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album.jpg" width={104} height={104} alt='Twenty one pilots'/>
                <strong>Scaled And Icy</strong>
                <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album1.jpeg" width={104} height={104} alt='Twenty one pilots'/>
              <strong>Nigh Vision</strong>
              <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album4.jpg" width={104} height={104} alt='Twenty one pilots'/>
              <strong>Evolve</strong>
              <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album5.png" width={104} height={104} alt='Twenty one pilots'/>
              <strong>Origins</strong>
              <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album2.jpeg" width={104} height={104} alt='Twenty one pilots'/>
              <strong>Doo-wops & hooligans</strong>
              <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20'>
              <Image src="/album3.jpg" width={104} height={104} alt='Twenty one pilots'/>
              <strong>XXIV Magic</strong>
              <button className='w-12 h-12 flex items-center pl-3 justify-center p-2 rounded-full bg-green-400 text-black m-auto mr-8 invisible group-hover:visible'>
                  <Play fill='bg-black'/>
                </button>
            </a>

        </div>

        <h2 className='font-semibold text-2xl mt-10'>Feito para você!</h2>

        <div className='grid grid-cols-10 gap-4 mt-4'>
          <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image src="/album1.jpeg"  className='w-full' width={120} height={120} alt='Twenty one pilots'/>
              <strong className='font-semibold'>Imagine Dragons</strong>
              <span className='text-sm text-zinc-500'>Believer, album Night vision</span>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image src="/album2.jpeg"  className='w-full' width={120} height={120} alt='Twenty one pilots'/>
              <strong className='font-semibold'>Talking to the moon</strong>
              <span className='text-sm text-zinc-500'>Bruno mars, album doo-woops</span>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image src="/album3.jpg"  className='w-full' width={120} height={120} alt='Twenty one pilots'/>
              <strong className='font-semibold'>24k Magic</strong>
              <span className='text-sm text-zinc-500'>Bruno Mars, album XXIV magic</span>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image src="/album4.jpg"  className='w-full' width={120} height={120} alt='Twenty one pilots'/>
              <strong className='font-semibold'>Its time</strong>
              <span className='text-sm text-zinc-500'>Imagine Dragons, album Evolve</span>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image src="/album5.png"  className='w-full' width={120} height={120} alt='Twenty one pilots'/>
              <strong className='font-semibold'>Natural</strong>
              <span className='text-sm text-zinc-500'>Imagine Dragons, album origins</span>
          </a>
        </div>

        
        </main>
    )
}
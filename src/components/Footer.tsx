import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Fullscreen, Maximize, Maximize2} from 'lucide-react'
import Image from 'next/image'


export function Footer() {
    return(
        <footer className="bg-zinc-800 border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex gap-3 items-center'>
        <Image src="/album1.jpeg"  width={68} height={68} alt='Twenty one pilots'/>
        <div className='flex flex-col'>
        <strong className='font-normal'>24k Magic</strong>
          <span className='text-xs text-zinc-400'>Bruno Mars, album XXIV magic</span>
        </div>
        </div>
        <div className='flex flex-col items-center justify-center  gap-2'>
          <a href='' className='flex gap-3 items-center'>
          <Shuffle size={20}className='text-zinc-200 hover:text-zinc-50'/>
          <SkipBack size={20}className='text-zinc-200 hover:text-zinc-50'/>
          <button className='w-10 h-10 flex items-center pl-1 justify-center rounded-full bg-white text-black hover:bg-zinc-50'>
            <Play size={20}fill='bg-black hover:text-zinc-50' />
          </button>
          <SkipForward size={20}className='text-zinc-200 hover:text-zinc-50'/>
          <Repeat size={20}className='text-zinc-200 hover:text-zinc-50'/>
          </a>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <a href='' className='flex items-center gap-4'>
          <Mic2 size={17} className='text-zinc-300 hover:text-zinc-50'/>
          <LayoutList size={17} className='text-zinc-300 hover:text-zinc-50'/>
          <Laptop2 size={17} className='text-zinc-300 hover:text-zinc-50'/>
          <div className='flex items-center gap-2'>
            <Volume size={17} className='text-zinc-300 hover:text-zinc-50'/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-7 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={17} className='text-zinc-300 hover:text-zinc-50'/>
        </a>
      </footer>
    )
}
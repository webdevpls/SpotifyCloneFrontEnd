import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Fullscreen, Maximize, Maximize2} from 'lucide-react'


export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">

      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full bg-red-500'/>
        <div className='w-3 h-3 rounded-full bg-yellow-500'/>
        <div className='w-3 h-3 rounded-full bg-green-500'/>

      </div>
        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-3 text-s font-semibold text-zinc-200'>
           <HomeIcon/>
            Home
            </a>
          <a href="" className='flex items-center gap-3 text-sn font-semibold text-zinc-200'>
            <Search />
            Search
            </a>
          <a href="" className='flex items-center gap-3 text-sn font-semibold text-zinc-200'>
            <Library />
            Your Library
            </a>
        </nav>

        <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>Top Hits Brasil</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>Os melhores Jorge e Matehus</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>So os rock</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>A melhor do nordeste</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>Joçao Gomes</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>Nattan</a>
          <a href="" className='text-zinc-400 text-sm hover:text-zinc-100'>WS on Board</a>
        </nav>

      </aside>
    )
}
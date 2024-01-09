import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Sidebar } from '@/components/Sidebar'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Fullscreen, Maximize, Maximize2} from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Sidebar/>
      <Hero/>
    </div>
    <Footer/>
   </div>
  )
}

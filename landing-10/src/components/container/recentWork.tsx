'use client'
import Image from 'next/image'
import Container from './container'
import { Typography } from '../ui/typography'
import { ImageIcon } from '@radix-ui/react-icons'

const RecentWork = () => {
  return (
    <Container id="recent_work" className="py-20 mb-12">
      <div className="px-4 md:px-24">
        <Typography
          variant="h3"
          className="w-full flex items-center justify-start text-start pb-2"
        >
          Recent Work
        </Typography>
        <Typography
          variant="p"
          className="w-full font-light flex items-center justify-start text-start pb-10"
        >
          Great, now that we have your attention, let's see some of my recent
          work.
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-8 px-4 md:px-24">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
        </div>

        {/* Second row */}
        <div className="w-full h-[200px] md:h-[300px] col-span-1 md:col-span-1 bg-white flex items-center justify-center">
          <ImageIcon className="w-20 h-20 text-gray-300" />
        </div>

        {/* Third row */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[300px] bg-white flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-gray-300" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RecentWork
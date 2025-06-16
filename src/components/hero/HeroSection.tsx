import React from 'react'
import Headline from './Headline'
import SearchTabs from './SearchTabs'
import SearchBar from './SearchBar'
import StatsSection from './StatsSection'
import TestimonialCard from './TestimonialCard'
import ReviewBadge from './ReviewBadge'
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-between bg-gradient-to-b from-[#f5f5ff] to-white w-full">
      <div className="hidden md:block absolute -bottom-0 right-0 z-0 max-w-[600px]">
        <Image
          src="/products/photography-with-natural__54037.jpeg"
          alt="house"
          width={600}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="md:translate-x-25 relative z-9 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-8 md:px-16 py-12 md:py-20 container mx-auto">
        <div>
          <Headline />
          <div className="mt-20 space-y-4">
            <SearchTabs />
            <SearchBar/>
            <StatsSection />
          </div>
        </div>
        <div className="relative flex flex-col gap-6 mt-10 md:mt-0 w-full max-w-md">
          <TestimonialCard />
          <ReviewBadge />
        </div>
      </div>
    </section>
  )
}

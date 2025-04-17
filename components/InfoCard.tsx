import React from 'react'
import HeaderNav from './HeaderNav'
import SectionCard from './SectionCard'
import { FaMobileAlt, FaLaptopCode, FaPalette, FaServer } from 'react-icons/fa'

const InfoCard = () => {
  return (
    <div className="flex-1 md:mx-12 md:p-10 bg-[#433e3e] rounded-2xl md:my-10">
          <HeaderNav />
          <section className="mt-10 space-y-6 mx-auto">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-300">
              A passionate Flutter developer with strong expertise in
              cross-platform apps, REST APIs, UI/UX, widgets, and state
              management solutions. Proven track record in delivering
              cutting-edge solutions, including API integration, third-party
              libraries, and performance optimization.
            </p>
            <p className="text-gray-300">
              If you're seeking a skilled Flutter developer to breathe life into
              your project and exceed your expectations, I am here to
              collaborate and create magic together.
            </p>
          </section>

          <section className="mt-10" >
            <h2 className="text-2xl font-semibold mb-4">What I'm Doing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard
                icon={<FaMobileAlt />}
                title="Mobile Apps"
                description="Professional development of Android and iOS apps using Flutter."
              />
              <SectionCard
                icon={<FaLaptopCode />}
                title="Web Development"
                description="High-quality responsive websites built with modern technologies."
              />
              <SectionCard
                icon={<FaPalette />}
                title="UI/UX Design"
                description="Clean and modern interfaces designed for usability and aesthetics."
              />
              <SectionCard
                icon={<FaServer />}
                title="Backend Development"
                description="High-performance backend services designed for scalability."
              />
            </div>
          </section>
        </div>
  )
}

export default InfoCard
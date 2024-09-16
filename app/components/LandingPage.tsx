'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Home from './Home'
import About from './About'
import Episodes from './Episodes'
import Contact from './Contact'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = {
    home: <Home />,
    about: <About />,
    episodes: <Episodes />,
    contact: <Contact />,
  }

  const handleNavClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Main Content */}
      <div className="z-10 w-full relative flex items-center justify-center">
        {sections[activeSection]}
      </div>

      {/* Menu */}
      <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <ul className="flex space-x-8">
          {Object.keys(sections).map((section) => (
            <li key={section}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(section)
                }}
                className={`text-xl transition-colors font-misto nav-item ${
                  activeSection === section ? 'text-[#0000FF] border-b-2 border-[#0000FF] active' : 'text-gray-800 hover:text-[#0000FF]'
                }`}
                style={{ letterSpacing: '0.05em' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
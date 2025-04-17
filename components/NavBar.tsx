// components/Navbar.tsx
'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function Navbar() {
  return (
    <NavigationMenu.Root className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold">Yogananda K S</a>
        <NavigationMenu.List className="flex space-x-6">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="hover:text-indigo-400" href="#about">
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="hover:text-indigo-400" href="#projects">
              Projects
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="hover:text-indigo-400" href="#contact">
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  )
}

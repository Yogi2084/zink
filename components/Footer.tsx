
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Yogananda K S. All rights reserved.</p>
        
        <div className="flex space-x-4 text-gray-400">
          <a href="https://github.com/Yogi2084" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

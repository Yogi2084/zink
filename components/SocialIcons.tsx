import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 text-xl text-gray-400 hover:text-accent transition-colors">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="mailto:aakashrajbanshi58@gmail.com" aria-label="Email">
        <FaGoogle />
      </a>
    </div>
  );
}

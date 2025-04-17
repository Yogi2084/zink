import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='mx-auto my-10 md:my-10'>
      <div className="w-full  h-5/6 bg-[#6e6d6d] p-6 flex flex-col items-center text-center space-y-10 rounded-2xl mx-8">
      <img src="/avatar.png" alt="Avatar" className="rounded-2xl w-32 h-32" />
      <h1 className="text-2xl font-bold">Yogananda K S</h1>
      <span className="bg-black px-3 py-1 rounded-full text-sm">Flutter Developer</span>

      <div className="space-y-2 text-sm">
        <p><FaEnvelope className="inline mr-2" /> Yogananda9468@gmail.com</p>
        <p><FaPhone className="inline mr-2" /> +91 9686187378</p>
        <p><FaMapMarkerAlt className="inline mr-2" /> Tumkur, Karnataka</p>
      </div>

      <div className="flex space-x-4 text-xl">
        <FaLinkedin />
        <FaGithub />
        <FaGoogle />
      </div>
    </div>
    </div>
  );
}

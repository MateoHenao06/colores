import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full py-4 flex justify-center space-x-6 bg-gray-900 text-white">
        <a href="https://www.linkedin.com/in/mateo-henao-b903b02b9" className="text-xl hover:text-blue-400"><FaLinkedin /></a>
        <a href="https://www.instagram.com/mateo_07pp/?utm_source=qr&r=nametag" className="text-xl hover:text-pink-400"><FaInstagram /></a>
        <a href="https://github.com/MateoHenao06" className="text-xl hover:text-gray-400"><FaGithub /></a>
    </footer>
  )
}

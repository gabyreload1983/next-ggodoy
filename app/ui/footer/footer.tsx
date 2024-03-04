import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const links = [
  { name: "FaGithub", icon: FaGithub, href: "" },
  { name: "FaWhatsapp", icon: FaWhatsapp, href: "" },
  { name: "FaLinkedin", icon: FaLinkedin, href: "" },
  { name: "FaInstagram", icon: FaInstagram, href: "" },
  { name: "IoMailOutline", icon: IoMailOutline, href: "" },
  { name: "FaYoutube", icon: FaYoutube, href: "" },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 right-1/2 left-1/2 py-5">
      <div className="flex justify-center gap-5">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link key={link.name} href={link.href} className="">
              <LinkIcon className="hover:text-primary text-3xl md:text-6xl" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

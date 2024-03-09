import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "FaGithub",
    icon: FaGithub,
    href: "https://github.com/gabyreload1983",
    target: "_blank",
  },
  {
    name: "FaWhatsapp",
    icon: FaWhatsapp,
    href: "https://web.whatsapp.com/send?l=es&phone=+5493476643800",
    target: "_blank",
  },
  {
    name: "FaLinkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/estebangabrielgodoy/",
    target: "_blank",
  },
  {
    name: "FaInstagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/estebangabrielgodoy/",
    target: "_blank",
  },
  {
    name: "IoMailOutline",
    icon: IoMailOutline,
    href: "mailto:developer@gabrielgodoy.com.ar",
    target: "",
  },
  {
    name: "FaYoutube",
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UClaO3kGHGcGWOPzGH--hIaQ/videos",
    target: "_blank",
  },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 right-1/2 left-1/2 py-5">
      <div className="flex justify-center gap-5">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link key={link.name} href={link.href} target={link.target}>
              <LinkIcon className="hover:text-primary text-3xl md:text-6xl" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

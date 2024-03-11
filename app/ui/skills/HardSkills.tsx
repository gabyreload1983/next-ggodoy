import { FaDocker, FaGithub, FaHtml5, FaPhp, FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { DiUbuntu } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function HardSkills() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-center text-3xl font-bold py-5">Soft Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4  text-8xl gap-5 ">
        <IoLogoJavascript className="justify-self-center hover:text-primary" />
        <DiNodejsSmall className="justify-self-center hover:text-primary" />
        <FaReact className="justify-self-center hover:text-primary" />
        <TbBrandNextjs className="justify-self-center hover:text-primary" />
        <FaGithub className="justify-self-center hover:text-primary" />
        <FaGit className="justify-self-center hover:text-primary" />
        <DiMongodb className="justify-self-center hover:text-primary" />
        <SiTailwindcss className="justify-self-center hover:text-primary" />
        <FaHtml5 className="justify-self-center hover:text-primary" />
        <FaCss3 className="justify-self-center hover:text-primary" />
        <BsFillBootstrapFill className="justify-self-center hover:text-primary" />
        <FaDocker className="justify-self-center hover:text-primary" />
        <SiMysql className="justify-self-center hover:text-primary" />
        <DiUbuntu className="justify-self-center hover:text-primary" />
        <FaPhp className="justify-self-center hover:text-primary" />
      </div>
    </div>
  );
}

import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

import Link from "next/link.js";
import { Project } from "@/app/lib/definitions";
import { IoRocket } from "react-icons/io5";

export default function Card({ project }: { project: Project }) {
  return (
    <div className="p-5 border-white hover:border-primary border-2 rounded-2xl">
      <div>
        <h2 className="text-2xl ">{project.name}</h2>
        <h4 className="text-1xl">{project.technology}</h4>
      </div>
      <Image
        src={project.urlImage}
        alt="alt"
        width={700}
        height={500}
        className="object-cover group-hover:opacity-75"
      />
      <div className="flex items-center justify-end gap-3 mt-2">
        <Link
          target="_blank"
          className="hover:text-primary"
          href={project.urlGithub}
        >
          <FaGithub size="2em" />
        </Link>
        <Link
          target="_blank"
          className="hover:text-primary"
          href={project.urlDeploy}
        >
          <IoRocket size="2em" />
        </Link>
      </div>
    </div>
  );
}

import { FaLaravel, FaNodeJs, FaPhp, FaReact } from "react-icons/fa"
import { TagComponent } from "../TagComponent"
import { BiLogoTypescript } from "react-icons/bi"
import { SiNestjs } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { GrGraphQl } from "react-icons/gr"
import { FaDocker } from "react-icons/fa6"

export const Skills = () => {
  return (
    <section id="skills" className="mt-10 p-4 rounded-xl text-white font-bold scroll-mt-20">
      <h2 className="font-jet dark:text-blue-700 text-left text-xl text-sky-500">/Skills</h2>

      <div className="mt-4 flex justify-start gap-2 flex-wrap">
        <TagComponent style="bg-react/20" text="React">
          <FaReact className="text-react size-5" />
        </TagComponent>

        <TagComponent style="bg-nestjs/20" text="Nestjs">
          <SiNestjs className="text-nestjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Nextjs">
          <RiNextjsFill className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-typescript/20" text="Typescript">
          <BiLogoTypescript className="text-typescript size-5" />
        </TagComponent>

        <TagComponent style="bg-node/20" text="Node">
          <FaNodeJs className="text-node size-5" />
        </TagComponent>

        <TagComponent style="bg-tailwind/20" text="Tailwind">
          <RiTailwindCssFill className="text-tailwind size-5" />
        </TagComponent>

        <TagComponent style="bg-laravel/20" text="Laravel">
          <FaLaravel className="text-laravel size-5" />
        </TagComponent>

        <TagComponent style="bg-php/20" text="Php">
          <FaPhp className="text-php size-5" />
        </TagComponent>

        <TagComponent style="bg-graphql/20" text="Graphql">
          <GrGraphQl className="text-graphql size-5" />
        </TagComponent>

        <TagComponent style="bg-docker/20" text="Docker">
          <FaDocker className="text-docker size-5" />
        </TagComponent>

      </div>
    </section>
  )
}
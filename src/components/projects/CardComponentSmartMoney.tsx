import { FaReact } from "react-icons/fa";
import { TagComponentProjects } from "../TagComponentProjects";
import avatar from '/avatar.webp'
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const CardComponentSmartMoney = () => {
  return (
    <a href="https://github.com/henriquesantosdev/smart-money" target="_blank">
      <div className="mx-auto overflow-hidden rounded-xl bg-grayv6 shadow-md">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={avatar}
              alt="Modern building architecture"
              loading="lazy"
            />
          </div>
          <div className="p-8">
            <div className="text-lg font-extrabold font-jet tracking-wide text-sky-500 uppercase">Smart money (em desenvolvimento)</div>

            <p className="mt-2 text-white text-sm font-jet">
              Smart Money é um app de gestão financeira com ReactJS e NestJS, que ajuda a controlar gastos, acompanhar receitas e visualizar relatórios de forma intuitiva e eficiente.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <TagComponentProjects style="border border-nestjs" text="Nestjs">
                <SiNestjs className="text-nestjs size-4" />
              </TagComponentProjects>

              <TagComponentProjects style="border border-react" text="React">
                <FaReact className="text-react size-4" />
              </TagComponentProjects>

              <TagComponentProjects style="border border-tailwind" text="Tailwind">
                <RiTailwindCssFill className="text-tailwind size-4" />
              </TagComponentProjects>
            </div>
          </div>
        </div>
      </div>
    </a>

  )
}
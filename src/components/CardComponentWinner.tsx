import { FaNodeJs, FaReact } from "react-icons/fa";
import { TagComponentProjects } from "./TagComponentProjects";
import avatar from '/avatar.webp'
import { Trophy } from "lucide-react";

export const CardComponentWinner = () => {
  return (
    <a href="https://github.com/henriquesantosdev/geoInsights" target="_blank">
      <div className="mx-auto mb-6 overflow-hidden rounded-xl bg-orange-950 border-2 dark:border-yellow-500 dark:border-4 border-yellow-400 shadow-md">
        <div className="md:flex">

          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={avatar}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-lg text-yellow-400 flex flex-wrap-reverse items-center gap-4 font-extrabold font-jet tracking-wide uppercase">
              GeoInsights
              <TagComponentProjects style="border border-yellow-400 text-white" text="Projeto premiado">
                <Trophy className="text-yellow-400 size-4" />
              </TagComponentProjects>
            </div>

            <p className="mt-2 text-white text-sm font-jet">
            Aplicação estratégica para mapear a presença geográfica de empresas e concorrentes, identificando oportunidades e auxiliando decisões com dados registrados e monitorados.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <TagComponentProjects style="border border-react" text="React">
                <FaReact className="text-react size-4" />
              </TagComponentProjects>

              <TagComponentProjects style="border border-node" text="React">
                <FaNodeJs className="text-node size-4" />
              </TagComponentProjects>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
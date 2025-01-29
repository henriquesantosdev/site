import { FaNodeJs, FaReact } from "react-icons/fa";
import { TagComponentProjects } from "./TagComponentProjects";
import avatar from '/avatar.webp'

interface CardComponent {
  style?: string;
}

export const CardComponent = ({ style }: CardComponent) => {
  return (

    <div className={`${style} mx-auto overflow-hidden rounded-xl bg-grayv6 shadow-md`}>
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
          <div className="text-lg font-extrabold font-jet tracking-wide text-sky-500 uppercase">Nome do projeto</div>
          <p className="mt-2 text-white text-sm font-jet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim risus at diam convallis maximus. Cras sagittis laoreet augue, quis efficitur ligula bibendum sit amet
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

  )
}
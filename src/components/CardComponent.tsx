import { FaNodeJs, FaReact } from "react-icons/fa";
import { TagComponentProjects } from "./TagComponentProjects";
import avatar from '/avatar.webp'

interface CardComponent {
  style?: string;
}

export const CardComponent = ({style}: CardComponent) => {
  return (

      <div className={`${style} mx-auto max-w-md overflow-hidden rounded-xl bg-grayv6 shadow-md md:max-w-2xl`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={avatar}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-extrabold font-jet tracking-wide text-sky-500 uppercase">Company retreats</div>
            <p className="mt-2 text-white text-sm font-jet">
              Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that.
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
import { MousePointerClick } from "lucide-react"
import { CardComponent } from "../CardComponent"
import { CardComponentWinner } from "../CardComponentWinner"
import { TagComponentAlert } from "../TagComponentAlert"

export const Projects = () => {
  return (
    <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
      <div className="mb-6">
        <h2 className="flex items-center gap-4 font-jet text-left text-xl text-sky-500 dark:text-blue-700">
          /Projetos
          <TagComponentAlert style="border border-sky-500 dark:text-blue-700 dark:border-blue-700" text="Clique para ver projeto">
            <MousePointerClick className="size-5"/>
          </TagComponentAlert>
        </h2>
      </div>

      <CardComponentWinner />
      <CardComponent style="mb-6" />
      <CardComponent />
    </section>
  )
}
import { MousePointerClick } from "lucide-react"
import { CardComponentWinner } from "../CardComponentWinner"
import { TagComponentAlert } from "../TagComponentAlert"

export const Projects = () => {
  return (
    <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
      <div className="mb-6">
        <h2 className="flex items-center gap-4 font-jet text-left text-xl text-sky-500 dark:text-blue-700">
          /Projetos
          <TagComponentAlert style="border border-sky-500 dark:text-blue-700 dark:border-blue-700" text="Clique para ver projeto">
            <MousePointerClick className="size-4"/>
          </TagComponentAlert>
        </h2>
      </div>

      <CardComponentWinner />
      <p className="text-sky-500 dark:text-blue-700 text-base font-jet text-center">Mais projetos em breve...</p>
    </section>
  )
}
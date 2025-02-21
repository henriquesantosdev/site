import { BrainCircuit, Layers, MessageSquareText, RotateCcw, Split, TriangleAlert, Users } from "lucide-react"
import { TagComponent } from "../TagComponent"

export const SoftSkills = () => {
  return (
    <section id="soft-skills" className="mt-4 p-4 rounded-xl text-white font-bold scroll-mt-20">
      <h2 className="font-jet dark:text-blue-700 text-left text-xl text-sky-500">/Soft-skills</h2>
      <div className="mt-4 flex justify-start gap-2 flex-wrap">
        <TagComponent style="bg-nextjs/20" text="Comunicação eficaz">
          <MessageSquareText className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Trabalho em equipe">
          <Users className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Resolução de problemas">
          <TriangleAlert className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Adaptabilidade">
          <RotateCcw className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Pensamento crítico">
          <BrainCircuit className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Organização">
          <Layers className="text-nextjs size-5" />
        </TagComponent>

        <TagComponent style="bg-nextjs/20" text="Proatividade">
          <Split className="text-nextjs size-5" />
        </TagComponent>
      </div>
    </section>
  )
}
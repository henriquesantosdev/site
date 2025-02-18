import { Construction, MousePointerClick } from "lucide-react"
import { CardComponentWinner } from "../projects/CardComponentWinner"
import { TagComponentAlert } from "../TagComponentAlert"
import { CardComponentSmartMoney } from "../projects/CardComponentSmartMoney"
import { motion } from 'motion/react'

export const Projects = () => {
  return (
    <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold scroll-mt-20">
      <div className="mb-6">
        <h2 className="flex items-center flex-wrap-reverse gap-4 font-jet text-left text-xl text-sky-500 dark:text-blue-700">
          /Projetos
          <TagComponentAlert style="border border-sky-500 dark:text-blue-700 dark:border-blue-700" text="Clique no card para ver o projeto">
            <MousePointerClick className="size-4" />
          </TagComponentAlert>
        </h2>
      </div>

      <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
        <CardComponentWinner />
      </motion.div>

      <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
        <CardComponentSmartMoney />
      </motion.div>

      <div className="text-sky-500 dark:text-blue-700 mt-6 flex gap-4 justify-center">
        <Construction className="size-5" />
        <p className=" text-sm font-jet">Mais projetos em desenvolvimento</p>
      </div>
    </section>
  )
}
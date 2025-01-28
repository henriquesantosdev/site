import { CardComponent } from "../CardComponent"

const Projects = () => {
  return (
    <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
      <div className="mb-4">
        <h2 className="font-jet text-left text-xl text-sky-500 dark:text-blue-700">/Projetos</h2>
      </div>

      <CardComponent style="mb-6" />
      <CardComponent style="mb-6" />
      <CardComponent />
    </section>
  )
}

export default Projects
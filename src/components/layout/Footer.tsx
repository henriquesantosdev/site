import { AtSign, FileDown } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 bg-grayv6 dark:bg-grayv7 mt-10 p-4 rounded-xl text-zinc-500 font-normal">
      <div className="flex flex-col gap-4">
        <a className="text-neutral-400 dark:text-neutral-500 italic underline flex items-center gap-2" href="mailto:email@contato.henriquesantosdev@gmail.com">
          <AtSign className="size-4" />
          contato.henriquesantosdev@gmail.com
        </a>
        <a className="text-neutral-400 dark:text-neutral-500 italic underline flex items-center gap-2" href="/CV-henrique-santos-developer.pdf">
          <FileDown className="size-4" />
          Download CV
        </a>
      </div>
      <p className="text-neutral-400 italic">Henrique Santos Developer @{currentYear}</p>
    </section>
  )
}

export default Footer
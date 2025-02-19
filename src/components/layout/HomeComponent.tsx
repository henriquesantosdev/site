import { ChevronRight, Contact, FileDown } from "lucide-react"
import { ButtonComponent } from "../ButtonComponent"
import avatar from '/avatar.webp'
import { BlinkCharaterAnimation } from "../BlinkCharacterAnimation"

export const HomeComponent = () => {
  return (
    <section id="home" className="bg-pcv4 bg-no-repeat bg-cover h-[calc(100vh-80px)] md:h-[500px] bg-center flex flex-col-reverse items-center gap-10 md:gap-24 justify-center md:flex-row p-4 rounded-xl scroll-mt-20">

      <div className="w-full md:w-5/12">
        <h1 className="text-white whitespace-nowrap font-bold text-[2.75rem]/10 md:text-5xl text-center md:text-left">Olá, eu sou <br /> Henrique Santos</h1>
        <span className="text-sky-500 font-semibold text-2xl pt-4 md:mt-2 text-center md:text-left flex items-center justify-center md:justify-start">
          <ChevronRight className="size-8" />
          <span className="mr-1">Fullstack developer</span>
          <BlinkCharaterAnimation>|</BlinkCharaterAnimation>
        </span>

        <div className="flex gap-2 mt-8">
          <ButtonComponent link="#contato">
            <Contact />
            Contato
          </ButtonComponent>

          <ButtonComponent link="/CV-henrique-santos-developer.pdf" target="_blank">
            <FileDown />
            Download CV
          </ButtonComponent>
        </div>
      </div>

      <div>
        <img
          src={avatar}
          alt="Imagem do desenvolvedor Henrique Santos"
          className="w-44 md:w-56 rounded-xl border-4 border-solid border-zinc-800"
        />
      </div>
    </section>
  )
}
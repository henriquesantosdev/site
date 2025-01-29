import { Contact, FileDown } from "lucide-react"
import { ButtonComponent } from "../ButtonComponent"
import avatar from '/avatar.webp'

export const HomeComponent = () => {
  return (
    <section id="home" className="bg-pcv4 bg-no-repeat bg-cover h-[calc(100vh-80px)] md:h-[500px] bg-center flex flex-col-reverse items-center gap-10 md:gap-24 justify-center md:flex-row p-4 rounded-xl">

      <div className="w-full md:w-5/12">
        <h1 className="text-white whitespace-nowrap font-bold text-[2.75rem]/10 md:text-5xl text-center md:text-left">Olá, eu sou <br /> Henrique Santos</h1>
        <p className="text-sky-500 font-semibold text-2xl mt-4 md:mt-2 text-center md:text-left">Fullstack developer</p>

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
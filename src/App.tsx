import { BicepsFlexed, CloudMoon, CloudSun, Contact, FileDown, FolderCode, House, User } from "lucide-react";
import { ButtonComponent } from './components/ButtonComponent'
import { MenuOption } from "./components/MenuOption";
import { SkillTagComponent } from "./components/SkillTagComponent";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { CardComponent } from "./components/CardComponent";
import { useState } from "react";

export default function App() {

  const [darkMode, setDarkMode] = useState(true)

  const handleSetDarkMode = () => {
    if (darkMode === true) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  return (
    <>
      <div className="bg-bluev5 p-4">
        <div className="max-w-6xl mx-auto">
          <nav className="bg-bluev5/30 backdrop-blur-md flex justify-between p-2 rounded-xl sticky top-4">
            <div className="flex gap-8">
              <MenuOption href={'#'}>
                <House />
                Home
              </MenuOption>

              <MenuOption href={'#'}>
                <User />
                Sobre mim
              </MenuOption>

              <MenuOption href={'#'}>
                <BicepsFlexed />
                Habilidades
              </MenuOption>

              <MenuOption href={'#'}>
                <FolderCode />
                Projetos
              </MenuOption>
            </div>

            <div onClick={handleSetDarkMode} className="flex gap-4 items-center">
              {darkMode ? (
                <CloudMoon className="text-grayv5 size-10 hover:bg-bluev6 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
              ) : (
                <CloudSun className="text-grayv5 size-10 hover:bg-bluev6 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
              )}
            </div>
          </nav>

          <section className="bg-intro bg-no-repeat bg-cover h-[500px] bg-center flex items-center gap-24 justify-center flex-row p-6 rounded-xl">

            <div>
              <h1 className="text-white font-bold text-5xl">Olá, eu sou <br /> Henrique Santos</h1>
              <p className="text-sky-500 font-semibold text-xl mt-2">Fullstack developer</p>

              <div className="flex gap-2 mt-8">
                <ButtonComponent>
                  <Contact />
                  Contato
                </ButtonComponent>

                <ButtonComponent>
                  <FileDown />
                  Download CV
                </ButtonComponent>
              </div>
            </div>
            <div>
              <img
                src="/avatar.png"
                alt="Imagem do desenvolvedor Henrique Santos"
                className="w-56 rounded-xl border-4 border-solid border-zinc-800"
              />
            </div>
          </section>
        </div>


        <div className="max-w-3xl mx-auto mt-4">

          <section className="mt-10 p-4 rounded-xl text-white font-bold flex flex-col">
            <h2 className="font-jet text-xl text-left text-sky-500">/Sobre mim</h2>
            <p className="font-jet text-lg text-left font-medium mt-4">
              Desenvolvedor apaixonado por transformar ideias em realidade digital. Experiente em PHP, Laravel, tupescript, graphql e MySQL, com habilidade comprovada em desenvolvimento web. Comprometido em criar soluções robustas e eficientes para atender às necessidades dos clientes. Em busca de oportunidades desafiadoras para expandir habilidades e contribuir para projetos inovadores.
            </p>
          </section>

          <section className="mt-10 p-4 rounded-xl text-white font-bold">
            <h2 className="font-jet text-left text-xl text-sky-500">/Skills</h2>
            <div className="mt-4 flex justify-start gap-2 flex-wrap">
              <SkillTagComponent background="bg-react/20" text="React">
                <FaReact className="text-react size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-typescript/20" text="Typescript">
                <BiLogoTypescript className="text-typescript size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-nestjs/20" text="Nestjs">
                <SiNestjs className="text-nestjs size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-nextjs/20" text="Nextjs">
                <RiNextjsFill className="text-nextjs size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-php/20" text="Php">
                <FaPhp className="text-php size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-laravel/20" text="Laravel">
                <FaLaravel className="text-laravel size-4" />
              </SkillTagComponent>

              <SkillTagComponent background="bg-graphql/20" text="Graphql">
                <GrGraphQl className="text-graphql size-4" />
              </SkillTagComponent>
            </div>
          </section>

          <section className="mt-4 p-4 rounded-xl text-white font-bold">
            <h2 className="font-jet text-left text-xl text-sky-500">/Soft-skills</h2>
            <div className="mt-4 flex justify-start gap-2 flex-wrap">
              <SkillTagComponent background="bg-nextjs/20" text="Nextjs">
                <RiNextjsFill className="text-nextjs size-4" />
              </SkillTagComponent>
            </div>
          </section>

          <section className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
            <div className="mb-4">
              <h2 className="font-jet text-left text-xl text-sky-500">/Projetos</h2>
            </div>
            <div className="flex-wrap bg-bluev1">
              <CardComponent img="/avatar.png" tecs={['Typescript', 'Node', 'React',]}>
                asdadsadsad
              </CardComponent>
            </div>
          </section>

          <section className="bg-zinc-900 mt-10 p-4 rounded-xl text-zinc-500 font-normal">
            <p>Made with </p>
          </section>
        </div>
      </div>
    </>
  )
}

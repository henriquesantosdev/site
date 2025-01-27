import { AtSign, Brain, BrainCircuit, CloudMoon, CloudSun, Contact, FileDown, FolderCode, House, Layers, Menu, MessageSquareText, RotateCcw, Split, TriangleAlert, User, Users } from "lucide-react";
import avatar from '/avatar.webp'
import { ButtonComponent } from './components/ButtonComponent'
import { MenuOption } from "./components/MenuOption";
import { TagComponent } from "./components/TagComponent";
import { FaLaravel, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { CardComponent } from "./components/CardComponent";

export default function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const [currentYear] = useState(new Date().getFullYear())

  const handleSetDarkMode = () => {
    const darkModeDiv = document.getElementById('dark-mode-div')

    if (darkMode === true) {
      setDarkMode(false)
      darkModeDiv?.classList.add('dark')
    } else {
      setDarkMode(true)
      darkModeDiv?.classList.remove('dark')
    }
  }

  const handleShowMenu = () => {
    if (showMenu === false) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <div id="dark-mode-div" className="">
      <SpeedInsights />
      <div className="bg-bluev5 dark:bg-neutral-100 p-2 md:p-4">
        <nav className="max-w-5xl mx-auto bg-bluev5/50 dark:bg-neutral-100/50 backdrop-blur-sm justify-between p-2 mb-2 hidden md:flex rounded-xl sticky top-4">
          <div className="flex gap-4 sm:gap-8 ">
            <MenuOption href={'#home'}>
              <House />
              <span>Home</span>
            </MenuOption>

            <MenuOption href={'#sobremim'}>
              <User />
              <span>Sobre mim</span>
            </MenuOption>

            <MenuOption href={'#skils'}>
              <Brain />
              <span>Skills</span>
            </MenuOption>

            <MenuOption href={'#projetos'}>
              <FolderCode />
              <span>Projetos</span>
            </MenuOption>
          </div>

          <div onClick={handleSetDarkMode} className="flex gap-4 items-center">
            {darkMode ? (
              <CloudMoon className="text-grayv5 dark:text-gray-500 dark:hover:text-white size-10 hover:bg-sky-500 dark:hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
            ) : (
              <CloudSun className="text-grayv5 size-10 hover:bg-sky-500 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
            )}
          </div>
        </nav>

        <div className="fixed bottom-5 right-5">
          <div className="flex items-end flex-col">
            {showMenu && (
              <div className="bg-bluev5/50 dark:bg-gray-800/70 backdrop-blur-sm flex flex-col gap-4 p-4 rounded-xl">
                <MenuOption href={'#home'}>
                  <House className="text-white" />
                  <span className="text-white">Home</span>
                </MenuOption>

                <MenuOption href={'#sobremim'}>
                  <User className="text-white" />
                  <span className="text-white">Sobre mim</span>
                </MenuOption>

                <MenuOption href={'#skills'}>
                  <Brain className="text-white" />
                  <span className="text-white">Skills</span>
                </MenuOption>

                <MenuOption href={'#projetos'}>
                  <FolderCode className="text-white" />
                  <span className="text-white">Projetos</span>
                </MenuOption>

                <div onClick={handleSetDarkMode} className="flex items-center">
                  {darkMode ? (
                    <CloudMoon className="text-white size-11 border border-sky-500 rounded-lg hover:border-none hover:bg-sky-500 dark:border-blue-600 dark:hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
                  ) : (
                    <CloudSun className="text-white size-11 border border-sky-500 rounded-lg hover:border-none hover:bg-sky-500 dark:border-blue-600 dark:hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
                  )}
                </div>
              </div>
            )}

            <button onClick={handleShowMenu} className="bg-bluev5/50 dark:bg-gray-800/70 backdrop-blur-sm p-2 mt-4 rounded-xl md:hidden">
              <div className="flex gap-2 items-center">
                <Menu className="text-white size-12" />
              </div>
            </button>
          </div>
        </div>


        <div className="max-w-6xl mx-auto">
          <section id="home" className="bg-pcv4 bg-no-repeat bg-cover h-[calc(100vh-50px)] md:h-[500px] bg-center flex flex-col-reverse items-center gap-10 md:gap-24 justify-center md:flex-row p-6 rounded-xl">

            <div className="w-full md:w-5/12">
              <h1 className="text-white whitespace-nowrap font-bold text-[2.75rem]/10 md:text-5xl text-center md:text-left">Olá, eu sou <br /> Henrique Santos</h1>
              <p className="text-sky-500 font-semibold text-2xl mt-4 md:mt-2 text-center md:text-left">Fullstack developer</p>

              <div className="flex gap-2 mt-8">
                <ButtonComponent link="" target="_blank">
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
        </div>

        <div className="max-w-3xl mx-auto mt-4">

          <section id="sobremim" className="mt-10 p-4 rounded-xl text-white font-bold flex flex-col">
            <h2 className="font-jet text-xl text-left text-sky-500 dark:text-blue-700">/Sobre mim</h2>
            <p className="font-jet dark:text-sky-800 text-lg text-left font-medium mt-4">
              Desenvolvedor apaixonado por transformar ideias em realidade digital. Experiente em PHP, typescript, node e seus frameworks mais modernos, com habilidade comprovada em desenvolvimento web. Comprometido em criar soluções robustas e eficientes para atender às necessidades dos clientes. Em busca de oportunidades desafiadoras para expandir habilidades e contribuir para projetos inovadores.
            </p>
          </section>

          <section id="skills" className="mt-10 p-4 rounded-xl text-white font-bold">
            <h2 className="font-jet dark:text-blue-700 text-left text-xl text-sky-500">/Skills</h2>

            <div className="mt-4 flex justify-start gap-2 flex-wrap">
              <TagComponent style="bg-react/20" text="React">
                <FaReact className="text-react size-4" />
              </TagComponent>

              <TagComponent style="bg-typescript/20" text="Typescript">
                <BiLogoTypescript className="text-typescript size-4" />
              </TagComponent>

              <TagComponent style="bg-node/20" text="Node">
                <FaNodeJs className="text-node size-4" />
              </TagComponent>

              <TagComponent style="bg-nestjs/20" text="Nestjs">
                <SiNestjs className="text-nestjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Nextjs">
                <RiNextjsFill className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-php/20" text="Php">
                <FaPhp className="text-php size-4" />
              </TagComponent>

              <TagComponent style="bg-laravel/20" text="Laravel">
                <FaLaravel className="text-laravel size-4" />
              </TagComponent>

              <TagComponent style="bg-graphql/20" text="Graphql">
                <GrGraphQl className="text-graphql size-4" />
              </TagComponent>
            </div>
          </section>

          <section id="soft-skills" className="mt-4 p-4 rounded-xl text-white font-bold">
            <h2 className="font-jet dark:text-blue-700 text-left text-xl text-sky-500">/Soft-skills</h2>
            <div className="mt-4 flex justify-start gap-2 flex-wrap">
              <TagComponent style="bg-nextjs/20" text="Comunicação eficaz">
                <MessageSquareText className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Trabalho em equipe">
                <Users className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Resolução de problemas">
                <TriangleAlert className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Adaptabilidade">
                <RotateCcw className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Pensamento crítico">
                <BrainCircuit className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Organização">
                <Layers className="text-nextjs size-4" />
              </TagComponent>

              <TagComponent style="bg-nextjs/20" text="Proatividade">
                <Split className="text-nextjs size-4" />
              </TagComponent>
            </div>
          </section>

          <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
            <div className="mb-4">
              <h2 className="font-jet text-left text-xl text-sky-500 dark:text-blue-700">/Projetos</h2>
            </div>

            <CardComponent style="mb-6"/>
            <CardComponent style="mb-6"/>
            <CardComponent/>
          </section>

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
        </div>
      </div>
    </div>
  )
}

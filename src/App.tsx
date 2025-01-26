import { BicepsFlexed, CloudMoon, CloudSun, Contact, FileDown, FolderCode, House, Menu, User } from "lucide-react";
import { ButtonComponent } from './components/ButtonComponent'
import { MenuOption } from "./components/MenuOption";
import { SkillTagComponent } from "./components/SkillTagComponent";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { useState } from "react";

export default function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const handleSetDarkMode = () => {
    if (darkMode === true) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
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
    <>
      <div className="bg-bluev5 p-2 md:p-4">
        <nav className="max-w-5xl mx-auto bg-bluev5/50 backdrop-blur-sm justify-between p-2 hidden md:flex rounded-xl sticky top-4">
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
              <BicepsFlexed />
              <span>Habilidades</span>
            </MenuOption>

            <MenuOption href={'#projetos'}>
              <FolderCode />
              <span>Projetos</span>
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

        <div className="fixed bottom-5 right-5">
          <div className="flex items-end flex-col">
            {showMenu && (
              <div className="bg-bluev5/50 backdrop-blur-sm flex flex-col gap-4 p-4 rounded-xl">
                <MenuOption href={'#home'}>
                  <House className="text-white" />
                  <span className="text-white">Home</span>
                </MenuOption>

                <MenuOption href={'#sobremim'}>
                  <User className="text-white" />
                  <span className="text-white">Sobre mim</span>
                </MenuOption>

                <MenuOption href={'#skills'}>
                  <BicepsFlexed className="text-white" />
                  <span className="text-white">Habilidades</span>
                </MenuOption>

                <MenuOption href={'#projetos'}>
                  <FolderCode className="text-white" />
                  <span className="text-white">Projetos</span>
                </MenuOption>

                {darkMode ? (
                  <CloudMoon className="text-white size-10 hover:bg-sky-500 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
                ) : (
                  <CloudSun className="text-white size-10 hover:bg-sky-500 hover:text-white hover:cursor-pointer hover:rounded-lg p-2" />
                )}
              </div>
            )}

            <button onClick={handleShowMenu} className="bg-bluev5/50 backdrop-blur-sm p-2 mt-4 rounded-xl md:hidden">
              <div className="flex gap-2 items-center">
                <Menu className="text-white size-12" />
              </div>
            </button>
          </div>
        </div>


        <div className="max-w-6xl mx-auto">
          <section id="home" className="bg-intro bg-no-repeat bg-cover h-[900px] md:h-[500px] bg-center flex flex-col-reverse items-center gap-10 md:gap-24 justify-center md:flex-row p-6 rounded-xl">

            <div className="w-full md:w-5/12">
              <h1 className="text-white font-bold text-5xl text-center md:text-left">Olá, eu sou <br /> Henrique Santos</h1>
              <p className="text-sky-500 font-semibold text-xl mt-2 text-center md:text-left">Fullstack developer</p>

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

          <section id="sobremim" className="mt-10 p-4 rounded-xl text-white font-bold flex flex-col">
            <h2 className="font-jet text-xl text-left text-sky-500">/Sobre mim</h2>
            <p className="font-jet text-lg text-left font-medium mt-4">
              Desenvolvedor apaixonado por transformar ideias em realidade digital. Experiente em PHP, Laravel, tupescript, graphql e MySQL, com habilidade comprovada em desenvolvimento web. Comprometido em criar soluções robustas e eficientes para atender às necessidades dos clientes. Em busca de oportunidades desafiadoras para expandir habilidades e contribuir para projetos inovadores.
            </p>
          </section>

          <section id="skills" className="mt-10 p-4 rounded-xl text-white font-bold">
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

          <section id="soft-skills" className="mt-4 p-4 rounded-xl text-white font-bold">
            <h2 className="font-jet text-left text-xl text-sky-500">/Soft-skills</h2>
            <div className="mt-4 flex justify-start gap-2 flex-wrap">
              <SkillTagComponent background="bg-nextjs/20" text="Nextjs">
                <RiNextjsFill className="text-nextjs size-4" />
              </SkillTagComponent>
            </div>
          </section>

          <section id="projetos" className="mt-10 p-4 rounded-xl text-2xl text-white font-bold">
            <div className="mb-4">
              <h2 className="font-jet text-left text-xl text-sky-500">/Projetos</h2>
            </div>

            <div className="flex-wrap bg-bluev1">
              <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="/img/building.jpg"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                    <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                      Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-gray-500">
                      Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                      places to do just that.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="bg-zinc-900 mt-10 p-4 rounded-xl text-zinc-500 font-normal">
            <p>Made with 💙 by Henrique Santos</p>
          </section>
        </div>
      </div>
    </>
  )
}

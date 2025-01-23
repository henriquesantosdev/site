import { BicepsFlexed, Contact, FileDown, FolderCode, House, Sun, User } from "lucide-react";
import { ButtonComponent } from './components/ButtonComponent'
import { MenuOption } from "./components/MenuOption";
import { SkillTagComponent } from "./components/SkillTagComponent";
import { FaReact } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div className="bg-bluev5 p-4">
        <div className="max-w-6xl mx-auto">
          <nav className="bg-bluev5/50 backdrop-blur-md flex justify-between p-2 rounded-xl sticky top-4">
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

            <div className="flex gap-4 items-center">
              <Sun className="text-grayv5 size-8" />
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

          <section className="mt-8 p-8 rounded-xl text-2xl text-white font-bold flex flex-col items-center">
            <h2 className="font-jet text-sky-500">Sobre mim</h2>
            <p className="font-jet text-[16px] mt-4 min-w-60">
              Desenvolvedor apaixonado por transformar ideias em realidade digital. Experiente em PHP, Laravel, tupescript, graphql e MySQL, com habilidade comprovada em desenvolvimento web. Comprometido em criar soluções robustas e eficientes para atender às necessidades dos clientes. Em busca de oportunidades desafiadoras para expandir habilidades e contribuir para projetos inovadores.
            </p>
          </section>

          <section className="mt-4 p-4 rounded-xl text-2xl text-white font-bold">
            <h2 className="font-jet text-center text-sky-500">Habilidades</h2>
            <div className="mt-4 flex justify-center gap-2">
              <SkillTagComponent background="bg-react/15" text="React">
                <FaReact className="text-react size-5" />
              </SkillTagComponent>
            </div>
          </section>

          <section className="mt-4 p-4 rounded-xl text-2xl text-white font-bold">
            <div>
              <h2 className="font-jet text-white">/ Projetos</h2>
            </div>
          </section>

          <section className="mt-4 p-4 rounded-xl text-zinc-500 font-normal">
            <p>Made with v by <a href="">HenriqueSantosDev</a></p>
          </section>
        </div>
      </div>
    </>
  )
}

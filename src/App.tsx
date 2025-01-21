import { BicepsFlexed, FolderCode, House, User } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="bg-primaryBlue p-4 h-[2000px]">
        <nav className="bg-secondaryGray/75 backdrop-blur-sm border border-[#2C2C2C] flex justify-center mx-auto w-[1000px] p-2 rounded-xl gap-8 sticky top-4">
          <a href="#" className="text-quintiaryGray p-2 rounded-lg flex font-semibold gap-2 hover:text-white hover:bg-primaryGray">
            <House />
            Home
          </a>

          <a href="#" className="text-quintiaryGray p-2 rounded-lg flex font-semibold gap-2 hover:text-white hover:bg-primaryGray">
            <User />
            Sobre mim
          </a>

          <a href="#" className="text-quintiaryGray p-2 rounded-lg flex font-semibold gap-2 hover:text-white hover:bg-primaryGray">
            <BicepsFlexed />
            Habilidades
          </a>

          <a href="#" className="text-quintiaryGray p-2 rounded-lg flex font-semibold gap-2 hover:text-white hover:bg-primaryGray">
            <FolderCode />
            Projetos
          </a>
        </nav>
        <div className="bg-secondaryGray border border-[#2C2C2C] flex items-center flex-col mx-auto w-[1000px] p-2 pt-8 mt-4 rounded-xl">
          <div className="bg-zinc-800 flex items-center gap-2 px-4 rounded-full text-secondaryGreen mb-4">
            <div className="bg-[#64ff1c] w-2 h-2 rounded-full"></div>
            <span className="font-semibold text-zinc-300 text-sm">Avaliable for Work </span>
          </div>

          <img
            src="/avatar.png"
            alt="Imagem do desenvolvedor Henrique Santos"
            className="w-56 rounded-full border-[16px] border-solid border-zinc-800"
          />
          <h1 className="text-white font-bold text-4xl mt-4">Henrique Santos</h1>
          <h2 className="text-">Full Stack Developer</h2>
        </div>
      </div>
    </>
  )
}

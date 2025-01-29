import { Brain, CloudMoon, CloudSun, FolderCode, House, Menu, User } from "lucide-react";
import { MenuOption } from "../MenuOption";
import { useState } from "react";

export const MenuComponent = () => {

  const [darkMode, setDarkMode] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

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
    <>
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

          <button name="menu" onClick={handleShowMenu} className="bg-bluev5/50 dark:bg-gray-800/70 backdrop-blur-sm p-2 mt-4 rounded-xl md:hidden">
            <div className="flex gap-2 items-center">
              <Menu className="text-white size-12" />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
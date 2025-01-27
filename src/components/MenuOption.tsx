interface MenuOptionProps {
  children: React.ReactNode;
  href: string;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ children, href }) => {
  return (
    <a href={href} className="text-grayv5 dark:text-gray-500 p-2 rounded-lg flex font-semibold gap-2 hover:text-white dark:hover:text-white dark:hover:bg-blue-600 hover:bg-sky-500">
      {children}
    </a>
  )
}
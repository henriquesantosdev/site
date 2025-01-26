interface MenuOptionProps {
  children: React.ReactNode;
  href: string;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ children, href }) => {
  return (
    <a href={href} className="text-grayv5 p-2 rounded-lg flex font-semibold gap-4 hover:text-white hover:bg-sky-500">
      {children}
    </a>
  )
}
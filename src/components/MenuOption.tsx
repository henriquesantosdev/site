interface MenuOptionProps {
  children: React.ReactNode;
  href: string;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ children, href }) => {
  return (
    <a href={href} className="text-grayv5 p-2 rounded-lg flex font-semibold gap-2 hover:text-white hover:bg-black">
      {children}
    </a>
  )
}
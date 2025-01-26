interface ButtonProps {
  children: React.ReactNode;
  link: string;
  target?: string;
}

export const ButtonComponent = ({ children, link, target }: ButtonProps) => {
  return (
    <>
      <a href={link} target={target || '_self'} className="bg-white hover:bg-sky-500 hover:text-white transition duration-100 w-2/4 text-primaryGray font-medium px-4 py-3 gap-2 rounded-lg flex items-center justify-center">
        {children}
      </a>
    </>
  )
}
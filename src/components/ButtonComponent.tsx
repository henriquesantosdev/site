interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonComponent = ({ children }: ButtonProps) => {
  return (
    <>
      <a href="" className="bg-white hover:bg-sky-500 hover:text-white transition duration-100 w-2/4 text-primaryGray font-medium px-4 py-3 gap-2 rounded-lg flex items-center justify-center">
        {children}
      </a>
    </>
  )
}
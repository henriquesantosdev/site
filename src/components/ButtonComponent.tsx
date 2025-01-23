interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <a href="" className="bg-white text-primaryGray font-medium px-4 py-2 gap-2 rounded-lg flex items-center justify-center">
        {children}
      </a>
    </>
  )
}
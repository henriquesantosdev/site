interface skillTagComponentProps {
  children: React.ReactNode;
  background: string;
  text: string
}

export const SkillTagComponent: React.FC<skillTagComponentProps> = ({ children, background, text }) => {
  return (
    <span className={`${background} flex items-center w-min py-1 px-4 rounded-full gap-2 font-jet font-medium`}>
      {children}
      <span className="text-base">{text}</span>
    </span>
  )
}
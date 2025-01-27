interface TagComponentProjectsProps {
  children: React.ReactNode;
  style: string;
  text: string
}

export const TagComponentProjects: React.FC<TagComponentProjectsProps> = ({ children, style, text }) => {
  return (
    <span className={`${style} flex items-center w-min whitespace-nowrap py-1 px-4 rounded-full gap-2 font-jet font-medium`}>
      {children}
      <span className="text-sm">{text}</span>
    </span>
  )
}
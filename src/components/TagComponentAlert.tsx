interface TagComponentProps {
  children: React.ReactNode;
  style: string;
  text: string
}

export const TagComponentAlert: React.FC<TagComponentProps> = ({ children, style, text }) => {
  return (
    <span className={`${style} flex items-center w-min whitespace-nowrap py-1 px-4 rounded-full gap-2 font-jet font-medium`}>
      {children}
      <span className="text-xs">{text}</span>
    </span>
  )
}
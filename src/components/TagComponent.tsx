import { motion } from 'motion/react'

interface TagComponentProps {
  children: React.ReactNode;
  style: string;
  text: string
}

export const TagComponent: React.FC<TagComponentProps> = ({ children, style, text }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.2,
        transition: {duration: 0.3}
      }}
    >
      <span className={`${style} dark:bg-gray-700 flex items-center w-min whitespace-nowrap py-1 px-4 rounded-full gap-2 font-jet font-medium`}>
        {children}
        <span className="text-sm">{text}</span>
      </span>
    </motion.span>
  )
}
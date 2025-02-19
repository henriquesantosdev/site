import { useEffect, useState } from "react"

interface BlinkCharaterAnimationProps {
  children: string
}

export const BlinkCharaterAnimation: React.FC<BlinkCharaterAnimationProps> = ({ children }) => {
  const [showCharacter, setShowCharacter] = useState(true)
  useEffect(() => {

    const interval = setInterval(() => {
      const element = document.getElementsByClassName('blinkCharacter')[0]

      if (showCharacter) {
        element.classList.remove('opacity-100')
        element.classList.add('opacity-0')
        setShowCharacter(false)
      } else {
        element.classList.remove('opacity-0')
        element.classList.add('opacity-100')
        setShowCharacter(true)
      }
    }, 500)

    return () => clearInterval(interval)

  }, [showCharacter])

  return <span className="blinkCharacter text-xl font-extrabold text-white">{children}</span>
}
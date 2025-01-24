interface Props {
  children: React.ReactNode;
  img: string;
  tecs: string[]
}

export const CardComponent = ({ children, img, tecs }: Props) => {
  return (
    <div>
      <img className="w-52" src={img} />
      <p>{children}</p>
      <div className="flex">
        {tecs.map(tec => {
          return <span className='flex flex-wrap bg-react/20 w-min py-[4px] px-4 rounded-full gap-2 font-jet font-medium'>
            <span className="text-base">{tec}</span>
          </span>
        })}
      </div>
    </div>
  )
}
import useEmblaCarousel from 'embla-carousel-react'
import './certificatesStyle.css'
import { useCallback } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'

export const CertificatesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla mt-16">
      <div className='embla__viewport' ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide h-24 flex items-center justify-center bg-slate-500">Slide 1</div>
          <div className="embla__slide h-24 flex items-center justify-center bg-slate-500">Slide 2</div>
          <div className="embla__slide h-24 flex items-center justify-center bg-slate-500">Slide 3</div>
        </div>
      </div>

      <div className='flex mt-4 items-center justify-center gap-8'>
        <button className="embla__prev border-2 text-white p-2 border-sky-500 rounded-full" onClick={scrollPrev}>
          <MoveLeft />
        </button>
        <button className="embla__next border-2 text-white p-2 border-sky-500 rounded-full" onClick={scrollNext}>
          <MoveRight />
        </button>
      </div>
    </div>
  )
}

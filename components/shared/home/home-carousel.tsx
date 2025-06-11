'use client';

import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";

type ItemType = {
      title: string,
      buttonCaption: string,
      image: string,
      url: string,
      isPublished: boolean,
    }

export function HomeCarousel({items}: {items: ItemType[]}) {

  const images = items.map(item => {
     return <CarouselItem key={item.title}>
        <Link href={item.url}>
              <div className='flex aspect-[16/6] items-center justify-center p-6 relative -m-1'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2'>
                  <h2 className='text-xl md:text-6xl font-bold mb-4 text-primary'>
                    {item.title}
                  </h2>
                  <Button className='hidden md:block'>
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
     </CarouselItem>
  })
 
  return (
    <Carousel plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true 
        }),
      ]}>
      <CarouselContent>
        {images}
      </CarouselContent>
      <CarouselPrevious className='left-0 md:left-12' />
      <CarouselNext className='right-0 md:right-12' />
    </Carousel>
  )
}
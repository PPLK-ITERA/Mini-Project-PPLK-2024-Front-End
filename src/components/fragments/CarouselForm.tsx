import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { FunFact } from "@/lib/data/funfact";

const CarouselForm = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        className="sm:w-[415px] sm:h-[415px] w-[300px] h-[200px] text-white"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {FunFact.map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="bg-white/10 border-none backdrop-blur-lg p-2 lg:p-5 md:aspect-square flex justify-center items-center flex-col">
                  <CardTitle>
                    <p className="text-2xl lg:text-4xl font-bold text-center text-white">
                      {item.title}
                    </p>
                    <p className="text-sm lg:text-lg font-semibold text-center text-white">
                      {item.subtitle}
                    </p>
                  </CardTitle>

                  <CardContent className="flex mt-5 md:mt-20 items-center justify-center">
                    <span className="text-sm md:text-md font-semibold text-center  text-white">
                      {item.desc}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="text-center text-sm text-white">
          {FunFact.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`inline-block w-2 h-2 transition ease-in-out duration-200 mx-1 rounded-full bg-white ${
                index === current - 1 ? "bg-white w-5" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <CarouselPrevious className="bg-transparent invisible lg:visible text-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white" />
        <CarouselNext className="bg-transparent invisible lg:visible text-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white" />
      </Carousel>
    </div>
  );
};

export default CarouselForm;

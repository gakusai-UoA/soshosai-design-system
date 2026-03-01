import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui";
import { ComponentPreview } from "../../ui/ComponentPreview";

const carouselUsage = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui"

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

export function CarouselGuide() {
    return (
        <ComponentPreview title="カルーセル (Carousel)" code={carouselUsage}>
            <div className="flex justify-center w-full px-12 text-left">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-100 border border-gray-200">
                                        <span className="text-4xl font-semibold text-gray-500">{index + 1}</span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </ComponentPreview>
    );
}

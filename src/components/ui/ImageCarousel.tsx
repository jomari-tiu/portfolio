import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

export function ImageCarousel({ images, alt = "Project image" }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateState();
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);

    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-500">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Carousel */}
      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
            >
              <img
                src={image}
                alt={`${alt} ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200",
              "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25",
              "hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/40",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:from-indigo-500 disabled:hover:to-purple-600"
            )}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200",
              "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25",
              "hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/40",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:from-indigo-500 disabled:hover:to-purple-600"
            )}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="shrink-0 text-center py-4 text-sm text-zinc-400">
          {selectedIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

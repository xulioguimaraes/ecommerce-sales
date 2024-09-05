import { CarouselSession } from "@/components/CarouselSession";
import { InfoSales } from "@/components/InfoSales";
import { CarouselCardImage } from "@/components/CarouselCardImage";
import { CorouselAnimateHover } from "@/components/CorouselAnimateHover";
import { Cta } from "@/components/Cta";
export default function Home() {
  return (
    <>
      <CarouselSession />

      <InfoSales />
      <CarouselCardImage />

      <CorouselAnimateHover />

      <Cta />
    </>
  );
}

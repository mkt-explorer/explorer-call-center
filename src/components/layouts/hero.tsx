
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

const HERO = [
    {
        bgimg: "/bg/slide-1.webp",
        subtitulo: "15 anos de excelência em",
        titulo: "relacionamento com o cliente",
        url: "#",
    },
    {
        bgimg: "/bg/slide-2.webp",
        subtitulo: "15 anos de excelência em",
        titulo: "relacionamento com o cliente",
        url: "#",
    },

];

export function Hero(){
    return(
        <section className="flex flex-col w-full pt-32">
            <Carousel orientation="horizontal">
                <CarouselContent>
                    {HERO.map((hero1, idx) => (
                        <CarouselItem key={idx} style={{ backgroundImage: `url(${hero1.bgimg})` }} className="w-full h-600 lg:h-[500px] bg-no-repeat bg-cover bg-center">
                            <div className="container py-10">
                                <div className="flex flex-col items-center pt-24">
                                    <div className="flex flex-col gap-3 text-white text-center">
                                        <span className="uppercase">{hero1.subtitulo}</span>
                                        <h1 className="text-4xl font-extrabold uppercase">{hero1.titulo}</h1>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-10">
                                        <Button asChild variant={"default"} className="rounded-full uppercase"><Link href={hero1.url}>nossos serviços</Link></Button>
                                        <Button asChild variant={"secondary"} className="rounded-full uppercase"><Link href={"/"}>entrar em contato</Link></Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-[2rem] top-[15%] md:top-[90%]"/>
                <CarouselNext className="left-[5rem] top-[15%] md:top-[90%]"/>
            </Carousel>
        </section>
    );
}

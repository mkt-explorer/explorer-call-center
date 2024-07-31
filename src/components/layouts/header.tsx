import Link from "next/link";
import Image from "next/image";

import { ChevronsUpDown, Menu, UserRound } from "lucide-react";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,}  from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger, } from "@/components/ui/sheet";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, } from "@/components/ui/collapsible";

const LINKS = [
  {
    title: "Sobre",
    url: "/sobre",
  },
  {
    title: "Soluções",
    subLinks: [
      {
        title: "Contact Center",
        url: "/contact-center",
      },
      {
        title: "Tecnologia",
        url: "/tecnologia",
      },
      {
        title: "Consultoria",
        url: "/consultoria",
      },
      {
        title: "Locação de Infra",
        url: "/locacao-de-infra",
      },
    ],
  },
  {
    title: "Contato",
    url: "/contato",
  },
  {
    title: "LGPD",
    url: "/lgpd",
  },
  {
    title: "Governança Corporativa",
    url: "/governanca-corporativa",
  },
  {
    title: "Relatório de Transparência Salarial",
    url: "/relatorio-de-transparencia-salarial",
  },
];

export function Header() {
  return (
    <div className="w-full fixed z-10">
      <div className="w-full bg-orange-600 py-1">
        <div className="container grid grid-cols-1 items-center text-center">
          <span className="text-white text-xs">Empresa adequada a Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018) | Adequada pela <a href="https://complylgpd.com.br" target="_blank">Comply Solution.</a></span>
        </div>
      </div>
      <Card className="rounded-none border-none shadow-sm py-5">
        <div className="container">
          <div className="flex flex-row justify-between items-center">
            <div className="flex">
              <Link href={"/"}>
                <Image src={"/logo-exp.png"} alt="logo explorer call center" width={100} height={100} priority />
              </Link>
            </div>
            
            <div className="flex flex-row gap-4 items-center">
              {/* Menus de Navegação para Dispositivos Médios e Maiores */}
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    {LINKS.map((link) => (
                      <NavigationMenuItem key={link.title}>
                        {link.subLinks ? (
                          <>
                            <NavigationMenuTrigger>
                              {link.title}
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                              <ul className="p-2 md:w-[250px]">
                                {link.subLinks.map((subLink) => (
                                  <li key={subLink.title}>
                                    <NavigationMenuLink asChild>
                                      <Link href={subLink.url} className="block px-4 py-2 hover:bg-accent">
                                        {subLink.title}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link href={link.url} className="block px-4 py-2 hover:bg-accent rounded-full">
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex space-x-4 items-center justify-end">
                <Separator orientation="vertical" className="h-5" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant={"outline"} size={"icon"} className="rounded-full">
                        <Link href={"https://platform.senior.com.br/login/?redirectTo=https%3A%2F%2Fplatform.senior.com.br%2Fsenior-x%2F&tenant=neotempus.com.br"} target="_blank">
                          <UserRound />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Login Colaborador - Sênior</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Menu Colapsável para Dispositivos Menores */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant={"outline"} size={"icon"} className="rounded-full">
                        <Menu />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side={"right"}>
                    <SheetHeader>
                        <SheetDescription className="pt-5">
                          <div className="space-y-4">
                            {LINKS.map((link) => (
                              <div key={link.title}>
                                {link.subLinks ? (
                                  <Collapsible>
                                    <CollapsibleTrigger asChild className="flex w-full">
                                      <Button variant={"outline"} className="flex justify-between">
                                        {link.title} <ChevronsUpDown size={12} />
                                      </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pt-2">
                                      <ul className="space-y-2">
                                        {link.subLinks.map((subLink) => (
                                          <li key={subLink.title}>
                                            <Button asChild variant="outline" className="w-full">
                                              <Link href={subLink.url}>
                                                {subLink.title}
                                              </Link>
                                            </Button>
                                          </li>
                                        ))}
                                      </ul>
                                    </CollapsibleContent>
                                  </Collapsible>
                                ) : (
                                <Button asChild variant="outline" className="w-full">
                                  <Link href={link.url}>{link.title}</Link>
                                </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";
import ListItem from "@/components/ui/list-item.tsx";
import Opportunity from '/src/assets/opportunity.jpg';
import {Button} from "@/components/ui/button.tsx";
import {VscMenu} from "react-icons/vsc";
import {NavLink} from "react-router-dom";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {useState} from "react";
import {HiXMark} from "react-icons/hi2";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNabar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div id={"menuDesktop"}
                 className={"hidden md:flex fixed left-0 right-0 top-0 p-4 md:p-2  justify-between md:justify-center items-center navbar-container"}>
                <NavigationMenu className={"flex w-full"}>
                    <NavigationMenuList>
                        <NavigationMenuItem className={"mr-5"}>
                            <NavigationMenuLink href={"/"} className={"whitespace-nowrap"}>
                                COSMIC-PASSION.PL
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className={"hidden md:block"}>
                            <NavigationMenuTrigger>Martian rovers</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/rovers/opportunity"
                                            >
                                                <img src={Opportunity} alt={'opportunity picture'} className={"rounded"}/>
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Opportunity
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Opportunity was the second of the two rovers launched in 2003 to
                                                    land on Mars and begin traversing the Red Planet in search of
                                                    signs of ancient water.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/rovers/perseverance" title="Perseverance">
                                        Seek signs of ancient life and collect samples of rock and regolith (broken
                                        rock and soil) for possible return to Earth.
                                    </ListItem>
                                    <ListItem href="/rovers/spirit" title="Spirit">
                                        Studied the history of climate and water at sites on Mars where conditions
                                        may once have been favorable to life.
                                    </ListItem>
                                    <ListItem href="/rovers/curiosity" title="Curiosity">
                                        The largest and most capable rover ever sent to Mars.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className={"hidden md:block"}>
                            <NavigationMenuLink href={"/apod"} className={navigationMenuTriggerStyle()}>
                                APOD
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className={"block md:hidden"}>
                            <Button variant={"outline"} size={"icon"}>
                                <VscMenu/>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div id={"menuMobile"}
                 className={"flex md:hidden fixed left-0 right-0 top-0 p-4 md:p-2  justify-between md:justify-center items-center navbar-container"}
            >
                <nav className={"w-full flex flex-col"}>
                    <div className={"w-full flex justify-between items-center"}>
                        <NavLink to={"/"}>
                            COSMIC-PASSION.PL
                        </NavLink>
                        <Button variant={"outline"} size={"icon"} onClick={toggleNabar}>
                            {isOpen ? <HiXMark/> : <VscMenu/>}
                        </Button>
                    </div>
                    <div className={`flex justify-center items-center flex-col overflow-hidden ${isOpen ? 'h-max' : 'h-0'}`}>
                        <Accordion type={"single"} collapsible className={"w-full"}>
                            <AccordionItem value={"item-1"}>
                                <AccordionTrigger>Martian rovers</AccordionTrigger>
                                <AccordionContent>
                                    <NavLink to={'/rovers/opportunity'} className={"w-full block"}>
                                        Opportunity
                                    </NavLink>
                                </AccordionContent>
                                <AccordionContent>
                                    <NavLink to={'/rovers/perseverance'} className={"w-full block"}>
                                        Perseverance
                                    </NavLink>
                                </AccordionContent>
                                <AccordionContent>
                                    <NavLink to={'/rovers/spirit'} className={"w-full block"}>
                                        Spirit
                                    </NavLink>
                                </AccordionContent>
                                <AccordionContent>
                                    <NavLink to={'/rovers/curiosity'} className={"w-full block"}>
                                        Curiosity
                                    </NavLink>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <NavLink to={"/apod"} className={"w-full flex py-4 font-medium transition-all hover:underline"}>
                            APOD
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}
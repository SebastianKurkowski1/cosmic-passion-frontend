import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";
import ListItem from "@/components/ui/list-item.tsx";
import Opportunity from '/src/assets/opportunity.jpg';

export default function Navbar() {
    return (
        <>
            <div
                className={"fixed, left-0 right-0 top-0 p-4 md:p-2 flex justify-between md:justify-center items-center navbar-container"}>
                <div>
                    <NavigationMenu>
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
                                                    href="/"
                                                >
                                                    <img src={Opportunity} alt={'reactlogo'} className={"rounded"}/>
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
                                        <ListItem href="/docs" title="Perseverance">
                                            Seek signs of ancient life and collect samples of rock and regolith (broken
                                            rock and soil) for possible return to Earth.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Spirit">
                                            Studied the history of climate and water at sites on Mars where conditions
                                            may once have been favorable to life.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Curiosity">
                                            The largest and most capable rover ever sent to Mars.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem className={"hidden md:block"}>
                                <NavigationMenuLink href={"/doc"} className={navigationMenuTriggerStyle()}>
                                    APOD
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    );
}
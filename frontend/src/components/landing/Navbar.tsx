import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { contents } from "@/constants/landing/navbar";
import { ContentType } from "@/types/landing/navbar.type";
import { AppName, LogoIcon } from "@/constants/app.details";

const getMenuContent = (content: ContentType) => {
  return content.type === "double_column" ? (
    <NavigationMenuContent className="flex flex-col p-4 font-open-sans text-lg">
      <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[700px] ">
        {content?.subcontents.map((subcontent) => (
          <div className="flex flex-row items-center gap-4 w-full">
            {subcontent.icon}
            <ListItem
              key={subcontent.title}
              title={subcontent.title}
              href={subcontent.url}
              className="text-xl font-semibold w-full"
            >
              {subcontent.description}
            </ListItem>
          </div>
        ))}
      </ul>
    </NavigationMenuContent>
  ) : (
    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 h-[350px] md:w-[600px] lg:w-[650px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <div className="mb-2 mt-4 text-lg font-medium">
                Try our New Agent
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                A new AI agent that can help you with your shopping experience.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        {content?.subcontents.map((subcontent) => (
          <div className="flex flex-row items-center gap-4 w-full">
            {subcontent.icon}
            <ListItem
              key={subcontent.title}
              title={subcontent.title}
              href={subcontent.url}
              className="text-xl font-semibold w-full"
            >
              {subcontent.description}
            </ListItem>
          </div>
        ))}
      </ul>
    </NavigationMenuContent>
  );
};

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row items-center gap-2 w-full">
        {contents.map((content, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger
                className={`${navigationMenuTriggerStyle()} font-open-sans text-md py-6 font-semibold`}
              >
                {content.title}
              </NavigationMenuTrigger>

              {getMenuContent(content)}
            </NavigationMenuItem>
          );
        })}
        <Link to="/aboutus">
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} font-open-sans text-md py-7 font-semibold`}
          >
            About Us
          </NavigationMenuLink>
        </Link>
        <Link to="/documentation">
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} font-open-sans font-semibold text-md py-7`}
          >
            Documentation
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <section className="flex flex-row items-center justify-between w-full px-20 py-10 text-white">
      <div className="flex flex-row items-center gap-3">
        <img src={LogoIcon} className="w-15 aspect-square " />
        <h1 className="text-3xl font-bold ">{AppName}</h1>
      </div>
      <NavLinks />
      <div className="flex flex-row gap-4">
        <Link to="/login">
          <Button variant="default" className="p-5 px-7 text-md">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary" className="p-5 px-7 text-md ">
            Sign Up
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
// 16bb52e9b33a135d34c1c69b592ec2b5e6bb0aa9911929254292f60430a3e90a

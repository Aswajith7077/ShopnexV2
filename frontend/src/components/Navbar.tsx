import {
  Search,
} from "lucide-react"
 
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useHomeContext } from "@/context/home.context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {

  const navigate = useNavigate();


  const [searchValue, setSearchValue] = useState("");
  const context_handler = useHomeContext();

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <main className="flex flex-row justify-between w-full py-5 px-10 items-center">
      <div>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Button variant={"secondary"} className="hidden md:flex bg-slate-900 justify-start rounded-full pl-10 pr-10 py-5 w-100 border" onClick={() => {
        setOpen(prev => !prev);
      }}>
        <Search size={36}/>
        <p className="w-full justify-start mx-3 text-start text-gray-400 text-base">Search</p>
        <CommandShortcut>⌘K</CommandShortcut>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen} className="w-[1000px] h-[500px]">
        <CommandInput 
          placeholder="Type and press Enter to search..." 
          value={searchValue}
          onValueChange={setSearchValue}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              context_handler.setSearchText(searchValue);
              navigate('search');
              setOpen(false);
            }
          }}
        />
        <CommandList>
          <CommandEmpty>Press Enter to search for "{searchValue}"</CommandEmpty>
          <CommandGroup heading="Recent Searches">
            {/* You can add recent searches here if needed */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <div className="flex flex-row gap-3 items-center">
        <Switch />
        <Label>Dark Mode</Label>
      </div>
    </main>
  );
};

export default Navbar;

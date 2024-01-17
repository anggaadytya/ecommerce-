"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  FiSearch,
  FiHome,
  FiLogOut,
  FiSettings,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";
import Image from "next/image";
import HomeSidebar from "./HomeSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ModeToggle } from "../elements/MenuTheme";

const disableNavbar = ["auth", "admin"];

const Navbar = () => {
  const { data: session }: any = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpenCommand] = React.useState(false);
  const path = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommand((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {isOpen && <HomeSidebar close={handleOpen} />}
      {!disableNavbar.includes(path.split("/")[1]) && (
        <header className="fixed z-10 top-0 flex items-center justify-center w-full bg-neutral-800 px-4 h-14 shadow-md">
          <nav className="container mx-auto flex justify-around">
            <section className="flex items-center gap-x-5 transition-all duration-150 ease-in-out">
              <div className="block lg:hidden items-center justify-center text-center">
                <Button
                  aria-label="menu-sidebar"
                  size="icon"
                  onClick={handleOpen}
                  className="bg-white rounded-xl text-neutral-800"
                >
                  <FiMenu />
                </Button>
              </div>
              <div>
                <Image
                  src={
                    "https://res.cloudinary.com/ddugt5n5v/image/upload/v1705471052/Group_282_1_b22nd0.svg"
                  }
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className=" items-center gap-x-4 hidden lg:flex">
                <Link href="/" className="text-white flex items-center gap-x-2">
                  <FiHome />
                  Products
                </Link>
                <Link href="/" className="text-white flex items-center gap-x-2">
                  <FiShoppingCart />
                  About
                </Link>
              </div>
            </section>
            <section className="flex items-center gap-x-5">
              <Button
                size="sm"
                className="bg-white rounded-xl text-neutral-800"
                onClick={() => setOpenCommand((open) => !open)}
              >
                <FiSearch className="mr-2 h-4 w-4" />
                Search
              </Button>
              <CommandDialog open={open} onOpenChange={setOpenCommand}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" className="bg-white rounded-xl text-neutral-800">
                      {session?.user?.fullname.split(" ")[0]}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 rounded-xl py-2 shadow shadow-neutral-800">
                    <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
                    <DropdownMenuLabel>
                      {session?.user?.fullname}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <FiHome className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FiShoppingCart className="mr-2 h-4 w-4" />
                        <span>Cart</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FiSettings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <FiLogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button
                    size="sm"
                    className="bg-white rounded-xl text-neutral-800"
                  >
                    <Link href={"/auth/signin"}>Sign In</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white rounded-xl text-neutral-800"
                  >
                    <Link href={"/auth/signup"}>Sign Up</Link>
                  </Button>
                </>
              )}
            </section>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;

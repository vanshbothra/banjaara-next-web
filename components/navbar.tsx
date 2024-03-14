'use client'

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import React, {useState} from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  "Home",
  "Competitions",
  "Team",
];

const navigation = [
  { title: 'Home', link: '/' },
  { title: 'Competitions', link: '/competitions' },
  { title: 'Team', link: '/team' },
 ];

const NavbarComponent = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink] = useState(pathname);
  
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Banjaara &apos;24</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarBrand className="hidden sm:flex">
          <p className="font-bold text-inherit">Banjaara &apos;24</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navigation.map((item, index) => (
          <NavbarItem key={index} isActive={activeLink === item.link}>
            <Link 
              color={activeLink === item.link ? 'secondary' : 'foreground'} 
              href={item.link} 
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))} 
        {/* <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Competitions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Our Team
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="https://drive.google.com/drive/folders/1qUgcenK5DWUZuZYR90c4CsVA8bCULDzf?usp=sharing" variant="flat">
            Oh Shit Kit!
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark">
        {navigation.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={activeLink === item.link ? 'secondary' : 'foreground'}
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarComponent
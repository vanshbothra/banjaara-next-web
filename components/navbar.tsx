'use client'

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import React, {useState, useEffect} from "react";
import Link from 'next/link'

const menuItems = [
  "Home",
  "Competitions",
  "Team",
];

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
        <NavbarItem isActive>
          <Link color="secondary" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/competitions" aria-current="page">
            Competitions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Our Team
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="#" variant="flat">
            Oh Shit Kit!
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarMenu className="dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  )
}

export default NavbarComponent

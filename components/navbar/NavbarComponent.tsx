"use client"

import React, {useEffect, useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { NavbarMenu } from "@/components/navbar/navbarMenu";
import {usePathname, useRouter} from "next/navigation";
import { FaCartPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useAppDispatch } from '@/redux/hooks';
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { signOut, useSession } from 'next-auth/react';

import { siteConfig } from "@/config/site";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";


type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(NavbarMenu)
  const pathname = usePathname();
  const router = useRouter();

    const {data: session} = useSession()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUserProfile())
    })

  return (
    <Navbar position="static">
      <NavbarBrand>
        <h1 className="font-bold text-4xl text-blue-700">PSA</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-24 text-gray-100" justify="center">
        {menu.map((item, index)=> (
          <NavbarItem
            key={index}
            as={Link}
						href={item.path}
						isActive={item.path === pathname}
          >
            {item.name}
          </NavbarItem>
        ))}
        
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem className="hidden lg:flex bg-yellow-50 p-4 rounded-full">
            <FaCartShopping color={'green'} />
        </NavbarItem>
          {/*<Button*/}
          {/*    as={Link}*/}
          {/*    className="text-sm font-normal text-default-600 bg-default-100"*/}
          {/*    href={siteConfig.links.sponsor}*/}
          {/*    startContent={<FaCartShopping className="text-danger" />}*/}
          {/*    variant="flat"*/}
          {/*></Button>*/}
          <NavbarItem className="hidden md:flex gap-2">

              {session ? (
                  <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                          <Avatar
                              isBordered
                              as="button"
                              className="transition-transform"
                              color="secondary"
                              name="Jason Hughes"
                              size="sm"
                              src={session.user?.image as string}
                          />
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Profile Actions" variant="flat">
                          <DropdownItem onClick={()=>signOut()} key="logout" color="danger">
                              Log Out
                          </DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              ) : (
                  <Button
                      onClick={()=>router.push(`/login`)}
                      className="text-sm font-normal text-gray-100 bg-blue-500"
                  >
                      Login
                  </Button>
              )}
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}



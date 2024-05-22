"use client"

import { Flex, Link, HStack, Button } from "@chakra-ui/react";
import { SignInButton, SignOutButton, UserButton, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarProps {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
}

export function Navbar({ home, about, projects, skills, contact }: NavbarProps) {

    /*

        ANOTAÇÕES GERAIS 
        
        Problemas com autenticação!

        - O clerk é utilizado para mais de 1 nível de acesso, 
        portanto fica complicado conseguir ter apenas eu como Manager!

        - A solução é utilizar o NextAuth, criar uma tela de login e com isso realizar o login da forma convencional
    */

    // const { isLoaded, userId } = useAuth();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const router = useRouter();
    // const IdUserClerk = process.env.ID_USER_CLERK_MANAGER;

    // useEffect(() => {
    //     if (userId === IdUserClerk) {
    //         setIsLoggedIn(true);
    //       } else {
    //         router.push('/unauthorized');
    //       }
    // }, [isLoaded, userId, router]);

    const { isLoaded, userId } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      if (isLoaded) {
        setIsLoggedIn(!!userId);
      }
    }, [isLoaded, userId]);

    return (
        <Flex as="nav" align="center" justify="space-between" p={4} bg="#1A4D2E" color="#E8DFCA">
            <HStack w="100%" justify="space-between" p={2}>
                <NextLink href="/">
                    <Link fontWeight="bold">{home}</Link>
                </NextLink>
                <NextLink href="/about">
                    <Link>{about}</Link>
                </NextLink>
                <NextLink href="/skills">
                    <Link>{skills}</Link>
                </NextLink>
                <NextLink href="/projects">
                    <Link>{projects}</Link>
                </NextLink>
                <NextLink href="/contact">
                    <Link>{contact}</Link>
                </NextLink>
                <HStack>
                    {isLoggedIn ? (
                        <>
                            <UserButton />
                            <SignOutButton>
                                <Button colorScheme="teal" variant="outline">
                                    Logout
                                </Button>
                            </SignOutButton>
                        </>
                    ) : (
                        <SignInButton>
                            <Button colorScheme="teal" variant="outline">
                                Login
                            </Button>
                        </SignInButton>
                    )}
                </HStack>
            </HStack>
        </Flex>
    );
};

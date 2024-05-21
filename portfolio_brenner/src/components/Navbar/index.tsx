// components/Navbar.tsx
import { Flex, Link, HStack } from "@chakra-ui/react";
import { SignInButton, SignOutButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NextLink from "next/link";

interface NavbarProps {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
}

export function Navbar({ home, about, projects, skills, contact }: NavbarProps) {

    /*
        Criar o state para verificar se o sign in está ativo ou não
    */

    return (
        <Flex as="nav" align="center" justify="space-between" p={4} bg="red" color="white">
            <HStack mr={10} bg="black" w="100%" justify="space-between">
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
                {(
                    <>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton />
                        </SignedIn>
                    </>
                )}
            </HStack>
        </Flex>
    );
};

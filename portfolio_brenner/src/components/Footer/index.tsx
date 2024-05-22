import { Flex, Text, Link, Stack, HStack, VStack } from '@chakra-ui/react';
import NextLink from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
/*
    - Link para minhas redes sociais (Instagram, LinkedIn)
    - Número para contato
    - Email para contato
    - Link do Github que vai enviar diretamente para o repositório desse projeto (?)
*/

interface FooterProps {
    instagram: string,
    linkedIn: string,
    phoneNumber: string,
    email: string,
    github: string
}
export function Footer({ instagram, linkedIn, phoneNumber, email, github }: FooterProps) {
    return (
        <Flex bg="#1A4D2E" color="white" py={4} alignItems="center" justifyContent="space-between" p={5} >
            <VStack w="30%" color="#E8DFCA">
                <NextLink href="/">
                    <Link fontWeight="bold">Home</Link>
                </NextLink>
                <NextLink href="/about">
                    <Link>About</Link>
                </NextLink>
                <NextLink href="/skills">
                    <Link>Skills</Link>
                </NextLink>
                <NextLink href="/projects">
                    <Link>Projects</Link>
                </NextLink>
                <NextLink href="/contact">
                    <Link>Contact</Link>
                </NextLink>
            </VStack>
            <Stack w="50%"  p={4}>
                <HStack justify="space-around" >
                    <Link href={github}  _hover={{ textDecoration: 'none', color: '' }}>
                        <FaGithub size={50} color="E8DFCA" />
                    </Link>
                    <Link href={linkedIn} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                        <FaLinkedin size={50} color="E8DFCA" />
                    </Link>
                    <Link href={instagram} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                        <FaInstagram size={50} color="E8DFCA" />
                    </Link>
                </HStack>
            </Stack>
        </Flex>
    )
};
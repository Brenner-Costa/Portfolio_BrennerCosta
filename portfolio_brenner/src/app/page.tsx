import { Flex, VStack, HStack, Box, Text, Stack } from "@chakra-ui/react";
import { DiNodejsSmall, DiJavascript1, DiReact, DiMongodb, DiPostgresql   } from 'react-icons/di';
import { SiNextdotjs, SiPrisma } from "react-icons/si";
import Image from "next/image";


//Biblioteca de máquina de esquever
//Trocar a fonte das letras
//Colocar os icons das minhas stacks logo abaixo do meu nome 
//Colocar uma imagem minha
//Criar animação para as stacks que estão abaixo do meu nome

export default function Home() {
  return (
    <>

      <VStack
        w="50%"
        h="100%"
        bg="blue"
      >
        <Text>IMAGEM</Text>
      </VStack>

      <Stack
        w="50%"
        bg="red"
        h="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        textAlign="center"
      >

        <Text fontSize="70">Olá, meu nome é Brenner Costa</Text>
        <Text m={2}>Software Engineer - Full-Stack</Text>

        <HStack bg="blue" justify="space-around" p={1}>
          <DiJavascript1 size={50} />
          <DiNodejsSmall size={50}/>
          <DiReact size={50}/>
          <DiMongodb size={50}/>
          <DiPostgresql size={50}/>
          <SiNextdotjs size={50}/>
          <SiPrisma size={50}/>
        </HStack>
      </Stack>
    </>
  );
}

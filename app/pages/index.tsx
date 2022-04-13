import type { NextPage } from "next";

import { Hero, Search, SongCard } from "../components";
import { Box, Text, Flex, Spinner } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box minH="100vh" minW="100vw" display="flex" flexDir="column">
      <Box>
        <Hero />
        <Search />
      </Box>

      {/* <Box my="24" mx="20" display="flex" flexDir="column" gap="8">
        <Text
          fontFamily="syncopate"
          fontSize="3xl"
          fontWeight="700"
          textColor="#4B5563"
        >
          FEATURED SONGS
        </Text>

        <Flex dir="row" gap="8" alignItems="center">
          <SongCard />
        </Flex>
      </Box> */}

      <Box
        w="full"
        display="flex"
        flexDir="row"
        gap="4"
        fontFamily="redHat"
        fontSize="xl"
        textColor="blue.600"
        fontWeight="semibold"
        my="32"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
        Loading
      </Box>
    </Box>
  );
};

export default Home;

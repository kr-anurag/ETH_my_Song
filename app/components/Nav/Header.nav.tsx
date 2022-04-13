import type { NextComponentType } from "next";
import { useData } from "../../contexts/DataContext";

import { Box, Button, Image } from "@chakra-ui/react";

const Header: NextComponentType = () => {
  const { account } = useData();

  let minAddr =
    (account as string).substring(0, 4) +
    "...." +
    (account as string).substring(account.length - 4, account.length);

  return (
    <>
      <Box
        display="flex"
        flexDir="row"
        fontFamily="redHat"
        alignItems="center"
        marginLeft="auto"
        gap="4"
      >
        <Button
          h="9"
          colorScheme="cyan"
          px="6"
          py="2"
          rounded="full"
          fontWeight="bold"
          textColor="white"
          _active={{}}
        >
          upload song
        </Button>

        {account ? (
          <Button
            bgColor="green.50"
            rounded="full"
            h="8"
            px="4"
            _hover={{ bgColor: "green.100" }}
            fontWeight="700"
            fontSize="sm"
            gap="1"
          >
            <Image
              src="/assests/polygon-icon.svg"
              height="6"
              width="6"
              alt="polygon icon"
            />
            {minAddr}
          </Button>
        ) : (
          <Button
            h="9"
            colorScheme="cyan"
            px="6"
            py="2"
            rounded="full"
            fontWeight="bold"
            textColor="white"
            _active={{}}
          >
            connect wallet
          </Button>
        )}
      </Box>
    </>
  );
};

export default Header;

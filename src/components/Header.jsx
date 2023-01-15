import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"6"} shadow={"base"} backgroundColor={"blackAlpha.900"} height={'10vh'}>
      <Button
        variant={"link"}
        paddingRight={"5"}
        paddingLeft={"5"}
        fontSize={"xl"}
        color={"white"}
      >
        <Link to={"/"}>Home</Link>
      </Button>
      <Button
        variant={"link"}
        paddingRight={"5"}
        paddingLeft={"5"}
        fontSize={"xl"}
        color={"white"}
      >
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button
        variant={"link"}
        paddingRight={"5"}
        paddingLeft={"5"}
        fontSize={"xl"}
        color={"white"}
      >
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;

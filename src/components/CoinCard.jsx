import React from "react";
import {
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom' 

const CoinCard = ({ id, name, image, symbol, price, currencySymbol="₹"}) => (
  <Link to={`/coin/${id}`} >
    <VStack
      w={"52"}
      h={"52"}
      shadow={"lg"}
      justifyContent={"space-evenly"}
      p={"6"}
      borderRadius={"lg"}
      transition={"all .5s"}
      margin="6"
      color={"black"}
      backgroundColor={"white"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={image} w={"14"} h={"14"} objectFit={"contain"} />
      <Heading size={"lg"} noOfLines={"1"}>
        {symbol}
      </Heading>
      <Text noOfLines={"1"} size={"md"} fontWeight={"800"}>
        {name}
      </Text>
      <Text noOfLines={"1"} size={"md"} fontWeight={"800"}>
        {price? `${currencySymbol} ${price}`:'NA'}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;

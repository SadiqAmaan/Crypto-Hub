import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import csrc from "../assets/crypto-home.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"90vh"} >
      <motion.div
        style={{
          height: "70vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: "1",
          repeat: "Infinity",
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={csrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        CRYPTOHUB{" "}
        <Text fontSize={"3xl"}>INVEST IN CURRENCY OF THE FUTURE.</Text>
      </Text>
    </Box>
  );
}

export default Home;

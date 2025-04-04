import React, { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/apiClient";
import ErrorComponent from './ErrorComponent'
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Exchanges = () => {
  const { data: exchanges, isLoading, error } = useQuery({
    queryKey: ['exchanges'],
    queryFn: () => getData("/exchanges", { per_page: 100 }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (error) return <ErrorComponent message={'Error While Fetching Exchanges'} />

  return (
    <Container maxW={"container.xl"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {exchanges?.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                image={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = memo(({ name, image, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      h={'52'}
      shadow={"lg"}
      justifyContent={'space-evenly'}
      p={"6"}
      borderRadius={"lg"}
      transition={"all .5s"}
      margin="6"
      color={'black'}
      backgroundColor={'white'}
      css={{
        "&:hover": {
          transform: 'scale(1.1)'
        }
      }}
    >
      <Image src={image} w={"14"} h={"14"} objectFit={"contain"} />
      <Heading size={"lg"} noOfLines={"1"}>
        {rank}
      </Heading>
      <Text noOfLines={"1"} size={'md'} fontWeight={'800'}>{name}</Text>
    </VStack>
  </a>
));

export default Exchanges;

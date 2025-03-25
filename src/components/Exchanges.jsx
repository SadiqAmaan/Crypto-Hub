import React, { useEffect, useState, memo } from "react";
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
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const data = await getData("/exchanges", { per_page: 100 });
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={'Error While Fetching Exchanges'} />

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {exchanges.map((i) => (
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

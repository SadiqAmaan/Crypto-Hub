import React, { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/apiClient";
import ErrorComponent from "./ErrorComponent";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = useMemo(
    () => (currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"),
    [currency]
  );

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  const btns = useMemo(() => new Array(100).fill(1), []);

  const { data: coins, isLoading, error } = useQuery({
    queryKey: ['coins', currency, page],
    queryFn: () => getData("/coins/markets", {
      vs_currency: currency,
      page: page,
    }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"} w={"100%"} justifyContent={"center"} m={"5"}>
              <Button variant={"outline"} borderColor={"white"}>
                <Radio value={"inr"}>₹ INR </Radio>
              </Button>
              <Button variant={"outline"} borderColor={"white"}>
                <Radio value={"usd"}>$ USD</Radio>
              </Button>
              <Button variant={"outline"} borderColor={"white"}>
                <Radio value={"eur"}>€ EUR </Radio>
              </Button>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins?.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                image={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"white"}
                color={"black"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;

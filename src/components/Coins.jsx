import React, { useEffect, useState } from "react";
import { getData } from "../api/apiClient";
import ErrorComponent from "./ErrorComponent";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(100).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await getData("/coins/markets", {
          vs_currency: currency,
          page: page,
        });
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
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
            {coins.map((i) => (
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

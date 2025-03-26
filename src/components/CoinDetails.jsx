import React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { getData } from "../api/apiClient";
import Chart from "./Chart";
import {
  Container,
  Box,
  Button,
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
} from "@chakra-ui/react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setchartArray] = useState([]);

  const params = useParams();
  const currencySymbol = useMemo(
    () => (currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"),
    [currency]
  );
  const btns = useMemo(
    () => ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"],
    []
  );

  const switchChartStats = useCallback((key) => {
    switch (key) {
      case "7d":
        setDays("7d");
        break;
      case "14d":
        setDays("14d");
        break;
      case "30d":
        setDays("30d");
        break;
      case "60d":
        setDays("60d");
        break;
      case "200d":
        setDays("200d");
        break;
      case "365d":
        setDays("365d");
        break;
      case "max":
        setDays("max");
        break;
      default:
        setDays("24h");
        break;
    }
  }, []);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const data = await getData(`/coins/${params.id}`);
        const chartData = await getData(
          `/coins/${params.id}/market_chart`,
          { vs_currency: currency, days: days }
        );

        setCoin(data);
        setchartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
  fetchCoin();
  }, [params.id, currency, days, setLoading]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <Container maxWidth={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={"1"} w={"full"} backgroundColor={"white"} mt={"10"}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <HStack mr={"4"} mt={"4"} mb={"4"} overflowX={"auto"}>
            {btns.map((i) => (
              <Button key={i} onClick={() => switchChartStats(i)}>
                {i}
              </Button>
            ))}
          </HStack>

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

          <VStack spacing={"4"} padding={"8"} alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                {" "}
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%{" "}
              </StatHelpText>
            </Stat>
            <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
              {`#${coin.market_cap_rank}`}
            </Badge>
            <CustomBar
              high={`${currencySymbol} ${coin.market_data.high_24h[currency]} `}
              low={`${currencySymbol} ${coin.market_data.low_24h[currency]} `}
            />
            <Box w={"full"} p={"4"}>
              {" "}
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Capital"}
                value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol} ${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol} ${coin.market_data.ath[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={"50"} colorScheme={"yellow"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetails;

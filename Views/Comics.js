import React, { useState, useEffect } from "react";
import {
  Center,
  Text,
  Box,
  Stack,
  AspectRatio,
  Image,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import axios from "axios";

export default function Comics() {
  const publickey = "47133e255c6b14d78ebbc8188beb3815";
  const [query, setQuery] = useState([]);
  URL = `https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&formatType=comic&apikey=47133e255c6b14d78ebbc8188beb3815&hash=9cb5f40bfeb3aa1cc189b0de44b6460b`;

  useEffect(() => {
    const fetch = () => {
      console.log("----------------nueva respuesta -----------------------");
      axios
        .get(URL)
        .then((response) => {
          setQuery(response.data.data.results);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        {query.map((item) => (
          <Box
            key={item.id}
            overflow="hidden"
            width="100%"
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "black" }}
          >
            <Box backgroundColor={"black"}>
              <Heading
                key={item}
                textAlign="center"
                fontSize={20}
                color={"white"}
              >
                {item.title}
              </Heading>
              <AspectRatio ratio={16 / 9}>
                <Image
                width="80%"
                ml= {16}
                
                  source={{
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Text textAlign="center" p={2} color={"white"}>
                {item.description}
              </Text>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}

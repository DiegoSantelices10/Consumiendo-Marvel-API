import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import s from "../Style/Style";
import * as RootNavigation from "./RootNavigation";
import {
  NativeBaseProvider,
  View,
  Input,
  VStack,
  Center,
  Heading,
  Button,
  Box,
  Image,
} from "native-base";

function HomePage() {
  const [input, setInput] = useState("");

  return (
    <NativeBaseProvider>
      <View style={s.container}>
        <ImageBackground
          source={require("../assets/img/fondoPantalla1.jpg")}
          resizeMode="cover"
          style={s.image}
        >
          <VStack>
            <Box style={s.box}>
              <Center>
                <Image
                  source={require("../assets/img/Logos-World-Marvel-Studios.png")}
                  alt="logo"
                  style={s.imageLogo}
                />
                <Heading color="#ffffff" fontSize="xl">
                  Busca Tu Personaje Marvel
                </Heading>

                <Input
                  placeholder="Search"
                  variant="filled"
                  width={"90%"}
                  onChangeText={setInput}
                  style={s.input}
                  _web={{
                    _focus: {
                      borderColor: "muted.300",
                      style: { boxShadow: "none" },
                    },
                  }}
                />
                <Button
                  mt={5}
                  onPress={() =>
                    RootNavigation.navigate({
                      name: "HeroCard",
                      params: { input: input },
                    })
                  }
                >
                  BUSCAR
                </Button>
              </Center>
            </Box>
          </VStack>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
}

export default HomePage;

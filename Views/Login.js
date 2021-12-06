import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  Box,
  Button,
  AspectRatio,
  Image,
  Heading,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import s from "../Style/Style";
import * as RootNavigation from "./RootNavigation";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import HomePage from "./HomePage";
import * as AuthSession from "expo-auth-session";

export default function Login({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "666050719355-lu03rb227b3ldbbgaercq4akem7g7cc3.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      RootNavigation.navigate("MenuDrawer", {
        screen: "HomePage",
        params: response.authentication,
      });
    }
  }, [response]);

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../assets/img/fondo-negro.jpg")}
        resizeMode="cover"
        style={s.image}
      >
        <Box>
          <Image
            style={s.userImagenLogin}
            source={require("../assets/img/marvel-logo-menu.jpg")}
            alt="logo"
          />
        </Box>

        <Box>
          <Button
            style={s.buttonSingIn}
            title="Login"
            onPress={() => {
              promptAsync();
            }}
          >
            Sign In With Google
          </Button>
          <Image
            style={s.googleIcon}
            source={require("../assets/img/iconogoogle.png")}
            alt="Alternate Text"
          />
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

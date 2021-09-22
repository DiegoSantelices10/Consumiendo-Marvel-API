import React, {useState} from "react"
import {ImageBackground, StyleSheet, Text} from 'react-native'
import { NativeBaseProvider, View, Input, VStack,  Center, Heading,Button, Box, Image } from "native-base"


function HomePage({setHero, navigation}) {
  const [input, setInput] = useState("");

    return (
      <NativeBaseProvider>
      <View style={styles.container}>
      <ImageBackground source={require('./assets/img/fondoPantalla1.jpg')} resizeMode="cover" style={styles.image}>
      <VStack width="90%" space={2}>
        <Box bg="#000000" mt={114}  height={320} width={425} opacity='0.7'>
        <Center  top={3}>
          <Image source={require('./assets/img/Logos-World-Marvel-Studios.png')} 
          size={150} alt="logo" resizeMode="cover" width="90%" />
        <Heading color="#ffffff" fontSize="xl">Busca Tu Personaje Marvel</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={10}
          onChangeText={setInput}
          py={2}
          px={1}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
            }}
        />
         <Button mt={5}  onPress={() => navigation.navigate({name:'HeroCard', params: { input: input} })}>BUSCAR</Button>
        </Center>
         </Box>
      </VStack>
      </ImageBackground>
    </View>
    </NativeBaseProvider>
    )

  }

  export default HomePage;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height:720,
      width:425,
      flex:1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });


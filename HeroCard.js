import React, {useState, useEffect} from 'react'
import { Center, Text, Box, Stack, AspectRatio, Image, Heading, HStack, NativeBaseProvider, ScrollView } from 'native-base';
import axios from 'axios';


export function HeroCard({route}){
  const publickey = '47133e255c6b14d78ebbc8188beb3815';
  const [query, setQuery] = useState([]) 
  const nombre = `${route.params?.input}`

URL= `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nombre}&ts=1&apikey=47133e255c6b14d78ebbc8188beb3815&hash=9cb5f40bfeb3aa1cc189b0de44b6460b`

useEffect(() =>{ 
  const fetch = ()=>{
      axios.get(URL).then(response => {setQuery(response.data.data.results)}).catch(err => console.log(err))
     // console.log(result.data.data.results)
    }
fetch()
}, [route])



    return (
      <NativeBaseProvider>
        <ScrollView>
          {query.map( item => (
      <Box key={item.id}
      rounded="lg"
      overflow="hidden"
      width="80%"
      shadow={1}
      mb={5}
      left={10}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'black' }}
    >
      <Box backgroundColor={"black"}
      >
        <Heading key={item}
        textAlign="center"
        fontSize={20}
        color={"white"}
        >{item.name}</Heading>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}
            alt="image"
            
            
          />
        </AspectRatio>
        <Text
        textAlign="center" 
        p={2}
        color={"white"}>{item.description}</Text>
      </Box>


    </Box>
   )) }
    </ScrollView>
    </NativeBaseProvider>
    )
}
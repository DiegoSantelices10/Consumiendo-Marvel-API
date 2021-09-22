import React, {useState, useEffect} from 'react'
import { Center, Text, Box, Stack, AspectRatio, Image, Heading, HStack, NativeBaseProvider, ScrollView } from 'native-base';
import axios from 'axios';


export function HeroCard({route}){
  const publickey = '47133e255c6b14d78ebbc8188beb3815';
  const [query, setQuery] = useState([]) 
  const nombre = `${route.params?.input}`

URL= `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nombre}&ts=1&apikey=47133e255c6b14d78ebbc8188beb3815&hash=9cb5f40bfeb3aa1cc189b0de44b6460b`

useEffect(() =>{ 
  const fetch = async()=>{
      const result = await axios(URL)
     // console.log(result.data.data.results)
      setQuery(result.data.data.results)
    }

fetch()
}, [])
    return (
      <NativeBaseProvider>
        <ScrollView>
      <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
{ query.map( item => (
      <Box>
        <Heading key={item.id}>{item.name}</Heading>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}
            alt="image"
            size="80%"
          />
        </AspectRatio>
        <Text>{item.description}</Text>
      </Box>
    
   )) }


    </Box>
    </ScrollView>
    </NativeBaseProvider>
    )
}
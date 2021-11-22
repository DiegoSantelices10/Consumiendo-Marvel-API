import React, {useState, useEffect} from 'react';
import axios from 'axios';



export default function ApiConsullt(route) {
    const nombre = `${route.params?.input}`;
    URL= `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nombre}&ts=1&apikey=47133e255c6b14d78ebbc8188beb3815&hash=9cb5f40bfeb3aa1cc189b0de44b6460b`
    const [query, setQuery] = useState([]);
  
  useEffect(() => {
    const fetch = ()=>{
        axios.get(URL).then(response => {setQuery(response.data.data.results)}).catch(err => console.log(err))
       // console.log(result.data.data.results)
      }
  fetch()
  }, [route]);

    return (query)
}

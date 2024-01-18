import React, { useState, useRef, useEffect} from 'react'
import md5 from 'md5';
import Layout from './Layout/Layout';
import { useAppState } from '../AppState';
import Hero from './Hero';
import SearchForm from './SearchForm';
import { useNavigate } from 'react-router-dom';

const CharacterDisplay = () => {
    const { state } = useAppState()
    // console.log('State from AppState - ', state)
  
    const { searchInput } = state
    const [characters, setCharacters] = useState('')
    
    const apiPublic = 'd5d9f4b6fcbd66f1219f9668282675f8'
  
    const privateKey = '94ca720ab20951898545fc2d865d6c7b6b25b1cb'
  
    const date = new Date()
    const timeStamp = date.getTime()
  
    const hashStr = timeStamp + privateKey + apiPublic
    let hash = md5(hashStr)
  
    const searchName = searchInput
  
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchName}&ts=${timeStamp}&apikey=${apiPublic}&hash=${hash}`
  
    const getCharacters = useRef()
    
    getCharacters.current = async () => {
      const response = await fetch(apiUrl)
      const characters = await response.json()
      setCharacters(characters)
    }
    
    useEffect(() => {
      getCharacters.current()
    }, [])
    
    // console.log('Characters: ', characters)
    return (
        <Layout>
            {/* <Hero /> */}
            {
                characters.data?.results.map((character) => {
                console.log(character.comics)
                const imgStr = [`${character?.thumbnail?.path}`,'.', `${character?.thumbnail?.extension}`]
                const newImgStr = imgStr.join('')
                    return(
                        <div key={character.id}>
                            <h1>{character.name || 'No info on character'}</h1>
                            <img style={{width: '200px'}} src={newImgStr} alt='character'/>
                            <p>{character.description || "not available"}</p>
                            <button value={character.comics}>Comics</button>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default CharacterDisplay

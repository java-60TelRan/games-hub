import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { Game, FetchGamesResponse } from '../model/fetch-game-types'
import { SimpleGrid, Text} from '@chakra-ui/react'
import GameCard from './GameCard'
import { AxiosError } from 'axios'
import { Genre } from '../model/fetch-genre-types'

const GenreList = () => {
    

    
    
  return (
    <>
    {error? <Text color={"red"} fontSize={"2rem"}>{error}</Text> : <ul>
          {genres?.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>}
    </>
  )
}

export default GenreList
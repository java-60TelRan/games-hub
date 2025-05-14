import React from 'react'
import { Game } from '../model/fetch-game-types'
import { Card, Image, Text } from '@chakra-ui/react'
interface Props {
    game: Game
}
const GameCard: React.FC<Props> = ({game}) => {
   return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image height={"100%"} objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          {`description for game ${game.name}`}
        </Card.Description>
        
      </Card.Body>
     
    </Card.Root>
  )
}

export default GameCard
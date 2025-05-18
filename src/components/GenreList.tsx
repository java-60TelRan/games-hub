import { Text} from '@chakra-ui/react'
import { Genre } from '../model/fetch-genre-types'
import useData from '../hooks/useData'

const GenreList = () => {
    const {data, error} = useData<Genre>("/genres");
    const genres = data;

    
    
  return (
    <>
    {error? <Text color={"red"} fontSize={"2rem"}>{error}</Text> : <ul>
          {genres?.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>}
    </>
  )
}

export default GenreList
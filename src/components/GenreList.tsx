import { Text, List, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { FC } from "react";
import useGameQueryStore from "../../state-management/store";

function getSelectedStyls(slug: string, selectedGenre: string | null) : {fontWeight: string, color: string} {
     return slug === selectedGenre ? {fontWeight: "bold", color: "red"}: {fontWeight: "normal", color: "initial"}
}
const GenreList: FC = () => {
 const {data: genres, error, isLoading} = useGenre();
 const selectedGenre = useGameQueryStore(s => s.genre);
 const onSelectGenre = useGameQueryStore(s => s.setGenre);
 console.log("genre list");
 return  (
    <>
    {isLoading && <Spinner></Spinner>}
      {error? (
        <Text color="red" fontSize={"2.5rem"}>
          {error.message}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
           <List.Item key={"g.id"}>
            <HStack marginStart={"4vw"}>
              <Button
                fontWeight={!selectedGenre ? "bold" : "normal"}
                variant={"outline"}
                borderWidth="0"
                onClick={() => onSelectGenre(null)}
              >
                All Genres
              </Button>
            </HStack>
          </List.Item>
          {genres?.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background}/>
                </Avatar.Root>
                <Button {...getSelectedStyls(g.slug, selectedGenre)} variant={"outline"} borderWidth="0" fontSize={"1.1rem"} paddingX="1"
                onClick={()=>onSelectGenre(g.slug)}>{g.name}</Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;

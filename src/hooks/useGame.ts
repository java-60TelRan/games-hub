import { Game } from "../model/fetch-game-types";
import useData from "./useData";

export default function useGame(): {data: Game[], isLoading: boolean, error: string} {
    return useData<Game>("/games");
}
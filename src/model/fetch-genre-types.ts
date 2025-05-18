

export interface Genre {
    id: number;
    name: string;
    
}
export interface FetchGamesResponse {
    count: number;
    results: Genre[];
}
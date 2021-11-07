export interface Film {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: [];
  starships: [];
  vehicles: [];
  characters: [];
  planets: [];
  url: string;
  created: string;
  edited: string;
}

export interface FilmSearch {
  title: string;
}

import { iTunesTypes } from "../types/iTunesTypes.interface";
export const itunesSearch = async (search: string): Promise<iTunesTypes> =>
  await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=album`
  ).then(val => val.json());

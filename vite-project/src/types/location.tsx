import { Dispatch, SetStateAction } from 'react';

export type Location = {
  id: number;
  name: string;
  volunteerCount: string;
  img: string;
};

export type HelpContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  //allLocations: Location[];
  locations: Location[];
  // setLocations: Dispatch<SetStateAction<Location[]>>;
};

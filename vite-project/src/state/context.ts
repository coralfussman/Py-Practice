import { createContext, useContext } from 'react';
import { HelpContextType } from '../types/location';

//export const HelpContext = createContext<Partial<HelpContextType>>({});
export const HelpContext = createContext<HelpContextType | null>(null);

export function useHelpContext() {
  const cont = useContext(HelpContext);
  if (!cont) {
    throw new Error('need theme context');
  }
  return cont;
}

//----------- Alt Mthod not working rn
// const defState = {
//     search: '',
//     setSearch: (search:string) => {}
// } as HelpContextType;
// export const HelpContext = createContext(defState);

import { Dispatch, SetStateAction } from "react";

// export type CountryFilterState = [
//   string | null,
//   Dispatch<SetStateAction<string | null>>
// ];

export type State<T> = [state: T, setState: Dispatch<SetStateAction<T>>];

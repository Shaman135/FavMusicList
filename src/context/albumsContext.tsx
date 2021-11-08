import React from "react";
import { ActionTypes } from "../models/actionTypes";
import { Album } from "../models/album";

type Action = { type: ActionTypes; payload?: Album };
type State = Album[];
type Dispatch = (action: Action) => void;
type AlbumsProviderProps = { children: React.ReactNode };
type AlbumsContextProps = { state: State; dispatch: Dispatch };

const initialState: State = [];
const initialProps: AlbumsContextProps = {
  state: initialState,
  dispatch: (): void => {},
};

const AlbumsContext = React.createContext<AlbumsContextProps>(initialProps);

const persistState = (state: State) => {
  localStorage.setItem("albums", JSON.stringify(state));
};

const albumsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.INIT:
      const albums = localStorage.getItem("albums");
      if (albums) {
        return JSON.parse(albums);
      }
      return [];
    case ActionTypes.ADD:
      if (action.payload) {
        persistState([...state, action.payload]);
        return [...state, action.payload];
      }
      return state;
    case ActionTypes.DELETE:
      const newAlbums = state.filter(
        (album) => album.id !== action?.payload?.id
      );
      persistState(newAlbums);
      return newAlbums;
    case ActionTypes.UPDATE:
      const idx = state.findIndex((album) => album.id === action?.payload?.id);
      if (idx !== -1 && action.payload) {
        state[idx] = action.payload;
        persistState([...state]);
      }
      return [...state];
    default:
      return state;
  }
};

export const AlbumsProvider = ({ children }: AlbumsProviderProps) => {
  const [state, dispatch] = React.useReducer(albumsReducer, initialState);
  return (
    <AlbumsContext.Provider value={{ state, dispatch }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export const useAlbums = () => React.useContext(AlbumsContext);

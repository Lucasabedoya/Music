import { ActionReducerMap } from "@ngrx/store";
import { PlaylistsState } from "src/app/core/models/playlists.state";
import { playlistsReducer } from "./reducers/counter.reducer";

export interface AppState {
    Playlists: PlaylistsState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    Playlists: playlistsReducer,
}
import { createReducer, on } from '@ngrx/store';
import { PlaylistsState } from 'src/app/core/models/playlists.state';
import { loadedPlaylists, loadPlaylists } from '../actions/counter.actions';

export const initialState: PlaylistsState = { loading: false, playlists: []}

export const playlistsReducer = createReducer(
  initialState,
  on(loadPlaylists, (state => {
    return {...state, loading: true}
  })),
  on(loadedPlaylists, ((state, {playlist}) => {
    return {...state, loading: false, playlists: playlist}
  }))
)
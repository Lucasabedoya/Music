import { createReducer, on } from '@ngrx/store';
import { PlaylistsState } from 'src/app/core/models/playlists.state';
import { currentFavorites, currentProfile, currentTrackUrl, loadedCurrentPlaylist, loadedPlaylists, loadPlaylists } from '../actions/counter.actions';

export const initialState: PlaylistsState = { 
  loading: false, 
  playlists: [], 
  currentPlaylist: [],
  currentTracks: [],
  currentProfile: [],
  currentFavorites: [],
}

export const playlistsReducer = createReducer(
  initialState,
  on(loadPlaylists, (state => {
    return {...state, loading: true}
  })),
  on(loadedPlaylists, ((state, {playlist}) => {
    return {...state, loading: false, playlists: playlist}
  })),
  on(loadedCurrentPlaylist, ((state, {currentPlaylist}) => {
    return {...state, currentPlaylist: [currentPlaylist]}
  })),
  on(currentTrackUrl, ((state, {currentTracks}) => {
    return {...state, currentTracks: currentTracks}
  })),
  on(currentProfile, ((state, {currentProfile}) => {
    return {...state, currentProfile: currentProfile}
  })),
  on(currentFavorites, ((state, {currentFavorites}) => {
    return {...state, currentFavorites: currentFavorites}
  })),
)
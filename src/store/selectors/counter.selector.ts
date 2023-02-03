import { createSelector } from "@ngrx/store";
import { PlaylistsState } from "src/app/core/models/playlists.state";
import { AppState } from "../app.state";

export const selectPlaylistsFeature = (state: AppState) => state.Playlists;

export const selectPlaylists = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.playlists 
)

export const selectLoading = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.loading 
)

export const selectCurrentPlaylist = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.currentPlaylist
)

export const selectCurrentTracks = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.currentTracks
)

export const selectCurrentProfile = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.currentProfile
)

export const selectCurrentFavorites = createSelector(
    selectPlaylistsFeature,
    (state: PlaylistsState) => state.currentFavorites
)
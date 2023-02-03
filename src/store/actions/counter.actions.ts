import { createAction, props } from '@ngrx/store';

export const loadPlaylists = createAction(
    '[Playlists list] Load Playlists'
)

export const loadedPlaylists = createAction(
    '[Playlists list] Loaded Playlists',
    props<{ playlist: any }>()
)

export const loadedCurrentPlaylist = createAction(
    '[Playlists list] Loaded currentPlaylist',
    props<{ currentPlaylist: any }>()
)

export const currentTrackUrl = createAction(
    '[Playlists list] Loaded currentTrackUrl',
    props<{ currentTracks: any }>()
)

export const currentProfile = createAction(
    '[Playlists list] Loaded currentProfile',
    props<{ currentProfile: any }>()
)

export const currentFavorites = createAction(
    '[Playlists list] Loaded currentProfile',
    props<{ currentFavorites: any }>()
)

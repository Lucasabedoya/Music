import { createAction, props } from '@ngrx/store';

export const loadPlaylists = createAction(
    '[Playlists list] Load Playlists'
)

export const loadedPlaylists = createAction(
    '[Playlists list] Loaded Playlists',
    props<{ playlist: any}>()
)

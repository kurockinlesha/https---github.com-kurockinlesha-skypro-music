export const allTracksSelector = (store) => store.tracks.allTracks;
export const isPlayingSelector = (store) => store.tracks.isPlaying;
export const currentTrackSelector = (store) => store.tracks.currentTrack;
export const indexCurrentTrackSelector = (store) =>
  store.tracks.indexCurrentTrack;
export const shuffledAllTracksSelector = (store) =>
  store.tracks.shuffledAllTracks;
export const shuffledSelector = (store) => store.tracks.shuffled;
export const favouritesTracksSelector = (store) => store.tracks.favouritesTracks;
export const currentPlaylistSelector = (store) => store.tracks.currentPlaylist;
export const currentPageSelector = (store) => store.tracks.currentPage;
export const tokenSelector = (store) => store.auth.accessToken;
export const categoryArrSelector = (store) => store.tracks.categoryArr;
export const filtersPlaylistSelector = (store) => store.tracks.FiltersPlaylist


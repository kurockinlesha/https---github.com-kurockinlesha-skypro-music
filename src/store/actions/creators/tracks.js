import {
  SET_ALL_TRACKS,
  SET_IS_PLAYING,
  SET_CURRENT_TRACK,
  SET_NEXT_TRACK,
  SET_PREV_TRACK,
  TOGGLE_SHUFFLE_TRACKS,
} from "../types/tracks";

export const setAllTracks = (allTracks) => ({
  type: SET_ALL_TRACKS,
  payload: { allTracks },
});

export const setIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying,
});

export const setCurrentTrack = (track, indexCurrentTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: { track, indexCurrentTrack },
});
export const setNextTrack = (trackNext, indexNextTrack) => ({
  type: SET_NEXT_TRACK,
  payload: { trackNext, indexNextTrack },
});
export const setPrevTrack = (trackPrev, indexPrevTrack) => ({
  type: SET_PREV_TRACK,
  payload: { trackPrev, indexPrevTrack },
});

export const toggleShuffleTracks = (shuffled) => ({
  type: TOGGLE_SHUFFLE_TRACKS,
  payload: { shuffled },
});

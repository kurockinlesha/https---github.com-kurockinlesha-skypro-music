import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  currentPage: "",
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffled: false,
  shuffledAllTracks: [],
  favouritesTracks: [],
  categoryArr: [],
  currentPlaylist: [],
  FiltersPlaylist: {
    authors: [],
    isActiveAuthors: false,
    genres: [],
    isActiveGenres: false,
    sort: "По умолчанию",
    isActiveSort: false,
    search: "",
    isActiveSearch: false,
    filterTracksArr: [],
  },
};

const getShuffledAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

export const trackSlice = createSlice({
  name: "tracksReducer",
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    setFavouriteTracksAll: (state, action) => {
      state.favouritesTracks = action.payload;
    },

    setCategoryArr: (state, action) => {
      state.categoryArr = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },

    setCurrentTrack: (state, action) => {
      const { track, indexCurrentTrack } = action.payload;
      state.currentTrack = track;
      state.indexCurrentTrack = indexCurrentTrack;
    },

    setNextTrack: (state, action) => {
      const { trackNext, indexNextTrack } = action.payload;
      state.currentTrack = trackNext;
      state.indexCurrentTrack = indexNextTrack;
    },

    setPrevTrack: (state, action) => {
      const { trackPred, indexPredTrack } = action.payload;
      state.currentTrack = trackPred;
      state.indexCurrentTrack = indexPredTrack;
    },

    toggleShuffleTracks: (state, action) => {
      state.shuffled = action.payload;

      if (state.shuffled) {
        console.log("Shuffled", getShuffledAllTracks(state.currentPlaylist));
      }
      state.shuffledAllTracks =
        state.shuffled && getShuffledAllTracks(state.currentPlaylist);
    },

    setFilterPlaylist: (state, action) => {
      const { sort, authors, genres, search } = action.payload;

      if (authors === "") {
        state.FiltersPlaylist.authors = [];
      } else if (authors) {
        if (state.FiltersPlaylist.authors.includes(authors)) {
          state.FiltersPlaylist.authors = state.FiltersPlaylist.authors.filter(
            (item) => item !== authors
          );
        } else {
          state.FiltersPlaylist.authors = [
            ...state.FiltersPlaylist.authors,
            authors,
          ];
        }
      }

      if (genres === "") {
        state.FiltersPlaylist.genres = [];
      } else if (genres) {
        if (state.FiltersPlaylist.genres.includes(genres)) {
          state.FiltersPlaylist.genres = state.FiltersPlaylist.genres.filter(
            (item) => item !== genres
          );
        } else {
          state.FiltersPlaylist.genres = [
            ...state.FiltersPlaylist.genres,
            genres,
          ];
        }
      }

      if (sort) {
        state.FiltersPlaylist.sort = sort;
      }

      if (search?.length > 0) {
        state.FiltersPlaylist.search = search;
      } else {
        state.FiltersPlaylist.search = "";
        state.FiltersPlaylist.isActiveSearch = false;
      }

      const getFilteredTracks = () => {
        let filterArray = [];
        // список треков
        if (state.currentPage === "Main") {
          filterArray = state.allTracks;
        }
        if (state.currentPage === "Favourites") {
          filterArray = state.favouritesTracks;
        }

        if (state.currentPage === "Category") {
          filterArray = state.categoryArr;
        }

        // фильтрация

        // *по исполнителю
        if (state.FiltersPlaylist.authors.length > 0) {
          state.FiltersPlaylist.isActiveAuthors = true;

          filterArray = filterArray.filter((track) =>
            state.FiltersPlaylist.authors.includes(track.author)
          );
        }

        // *по жанрам
        if (state.FiltersPlaylist.genres.length > 0) {
          state.FiltersPlaylist.isActiveGenres = true;

          filterArray = filterArray.filter((track) =>
            state.FiltersPlaylist.genres.includes(track.genre)
          );
        }

        // сортировка по дате
        if (state.FiltersPlaylist.sort === "Сначала новые") {
          state.FiltersPlaylist.isActiveSort = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
        } else if (state.FiltersPlaylist.sort === "Сначала старые") {
          state.FiltersPlaylist.isActiveSort = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
        } else {
          state.FiltersPlaylist.isActiveSort = false;
        }

        // поиск
        if (state.FiltersPlaylist.search.length > 0) {
          state.FiltersPlaylist.isActiveSearch = true;

          filterArray = filterArray.filter((item) =>
            item.name
              .toLocaleLowerCase()
              .includes(state.FiltersPlaylist.search.toLocaleLowerCase())
          );
        }

        return filterArray;
      };

      state.FiltersPlaylist.filterTracksArr = getFilteredTracks();
    },
  },
});

export const {
  setAllTracks,
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  toggleShuffleTracks,
  setFavouriteTracksAll,
  setCurrentPage,
  setCurrentPlaylist,
  setCategoryArr,
  setFilterPlaylist,
} = trackSlice.actions;

export default trackSlice.reducer;

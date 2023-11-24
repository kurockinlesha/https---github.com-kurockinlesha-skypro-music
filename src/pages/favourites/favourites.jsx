import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as S from "../main/main.style";
import { useGetFavouriteTracksAllQuery } from "../../servicesQuery/tracks";
import {
  setFavouriteTracksAll,
  setCurrentPage,
} from "../../store/slices/tracksSlice";
import { TrackList } from "../../components/TrackList/TrackList";
import {
  favouritesTracksSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/tracks";

export function Favourites() {
  const dispatch = useDispatch();
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const filtred = useSelector(filtersPlaylistSelector);
  const { data, error, isLoading } = useGetFavouriteTracksAllQuery();

  const tracks =
    filtred?.isActiveSort ||
    filtred?.isActiveAuthors ||
    filtred?.isActiveGenres ||
    filtred?.isActiveSearch
      ? filtred?.filterTracksArr
      : favouritesTracks;

  useEffect(() => {
    console.log("filterFavourites", filtred.isActiveSort);
    console.log("tracksFavourites", tracks);
    dispatch(setFavouriteTracksAll(data));
  }, [filtred.isActiveSort, tracks]);

  useEffect(() => {
    if (data) {
      console.log("favouritesTracks", data);
      dispatch(setFavouriteTracksAll(data));
      dispatch(setCurrentPage("Favourites"));
    }
  }, [data]);

  return (
    <TrackList
      title="Мои треки"
      tracks={tracks}
      error={error}
      isLoading={isLoading}
      isFavorites
    />
  );
}

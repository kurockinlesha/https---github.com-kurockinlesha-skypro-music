import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from "../../components/TrackList/TrackList";
import { setAllTracks, setCurrentPage } from "../../store/slices/tracksSlice";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";
import {
  allTracksSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/tracks";

export function Main() {
  const dispatch = useDispatch();
  const tracksAll = useSelector(allTracksSelector);
  const filtred = useSelector(filtersPlaylistSelector);
  const { data, isError, isLoading } = useGetTracksAllQuery();
  const tracks =
    filtred?.isActiveSort ||
    filtred?.isActiveAuthors ||
    filtred?.isActiveGenres ||
    filtred?.isActiveSearch
      ? filtred?.filterTracksArr
      : tracksAll;

  useEffect(() => {
    console.log("filter", filtred.isActiveSort);
    console.log("tracks", tracks);
    dispatch(setAllTracks(data));
  }, [filtred.isActiveSort, tracks]);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  }, [data]);

  return <TrackList isLoading={isLoading} tracks={tracks} error={isError} />;
}

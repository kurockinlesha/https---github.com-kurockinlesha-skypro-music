import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from "../../components/TrackList/TrackList";
import { setAllTracks, setCurrentPage } from "../../store/slices/tracksSlice";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";
import { allTracksSelector } from "../../store/selectors/tracks";

export function Main() {
  const dispatch = useDispatch();
  const tracks = useSelector(allTracksSelector);
  const { data, isError, isLoading } = useGetTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    }
  }, [data]);

  return <TrackList isLoading={isLoading} tracks={tracks} error={isError} />;
}

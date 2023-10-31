import { useSelector } from "react-redux";
import * as S from "./Tracks.style";
import {
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/tracks";

export function Tracks({ isLoading, tracks, handleCurrentTrack }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);

  const trackItems = tracks.map((track) => (
    <S.playlistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
      <S.playlistTrack>
        <S.trackTitle>
          <S.trackTitleImage>
            {currentTrack && currentTrack.id === track.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
              <S.trackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.trackTitleSvg>
            )}
          </S.trackTitleImage>

          {isLoading ? (
            <div className="track__title-text">
              <S.trackTitleLink href="http://">
                {track.name}
                {track.remix ? (
                  <S.trackTitleSpan>({track.remix})</S.trackTitleSpan>
                ) : (
                  ""
                )}
              </S.trackTitleLink>
            </div>
          ) : (
            <S.Skeleton> </S.Skeleton>
          )}
        </S.trackTitle>

        {isLoading ? (
          <S.trackAuthor>
            <S.trackAuthorLink href="http://">{track.author}</S.trackAuthorLink>
          </S.trackAuthor>
        ) : (
          <S.Skeleton> </S.Skeleton>
        )}

        {isLoading ? (
          <S.trackAlbum>
            <S.trackAlbumLink href="http://">{track.album}</S.trackAlbumLink>
          </S.trackAlbum>
        ) : (
          <S.skeletonAlbum> </S.skeletonAlbum>
        )}

        <div className="track__time">
          <S.trackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.trackTimeSvg>
          <S.trackTimeText> {track.duration_in_seconds}</S.trackTimeText>
        </div>
      </S.playlistTrack>
    </S.playlistItem>
  ));

  return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
}
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./AudioPlayer.styles";
import { SkeletonPlayBar } from "../TrackListItem/Tracks.style";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import { AudioVolume } from "../AudioVolume/AudioVolume";
import { BarPlayerProgress } from "../AudioPlayerProgress/AudioPlayerProgress";
import {
  isPlayingSelector,
  currentPlaylistSelector,
  indexCurrentTrackSelector,
  shuffledSelector,
  shuffledAllTracksSelector,
} from "../../store/selectors/tracks";
import {
  setIsPlaying,
  setNextTrack,
  setPrevTrack,
  toggleShuffleTracks,
} from "../../store/slices/tracksSlice";
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from "../../servicesQuery/tracks";

export function AudioPlayer({ isLoading, currentTrack }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(isPlayingSelector);
  const shuffled = useSelector(shuffledSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const tracks = useSelector(currentPlaylistSelector);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const indexCurrentTrack = useSelector(indexCurrentTrackSelector);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setIsPlaying(true));
  };
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  const arrayTracksAll = shuffled ? shuffledAllTracks : tracks;

  useEffect(() => {
    handleStart();
    audioRef.current.onended = () => {
      if (indexCurrentTrack < arrayTracksAll.length - 1) {
        dispatch(
          setNextTrack({
            trackNext: arrayTracksAll[arrayTracksAll.indexOf(currentTrack) + 1],
            indexNextTrack: arrayTracksAll.indexOf(currentTrack) + 1,
          })
        );
      }
      dispatch(setIsPlaying(false));
    };
  }, [currentTrack]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime);
  };

  const [repeatTrack, setRepeatTrack] = useState(false);

  const toggleTrackRepeat = () => {
    audioRef.current.loop = !repeatTrack;
    setRepeatTrack(!repeatTrack);
  };
  const toggleCurrentTrack = (alt) => {
    if (alt === "next" && indexCurrentTrack < arrayTracksAll.length - 1) {
      const indexNextTrack = arrayTracksAll.indexOf(currentTrack) + 1;
      console.log("Next", arrayTracksAll[indexNextTrack]);
      return dispatch(
        setNextTrack({
          trackNext: arrayTracksAll[indexNextTrack],
          indexNextTrack,
        })
      );
    }
    if (alt === "prev" && indexCurrentTrack > 0) {
      const indexPredTrack = arrayTracksAll.indexOf(currentTrack) - 1;
      console.log("Pred", arrayTracksAll[indexPredTrack]);
      return dispatch(
        setPrevTrack({
          trackPred: arrayTracksAll[indexPredTrack],
          indexPredTrack,
        })
      );
    }
  };
// лайк
  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();
  const auth = JSON.parse(localStorage.getItem("user"));
  const isUserLike = Boolean(
    currentTrack?.stared_user?.find((user) => user.id === auth.id)
  );

  const [isLiked, setIsLiked] = useState(isUserLike);

  useEffect(() => {
    if (currentTrack?.stared_user) {
      setIsLiked(isUserLike)
    } else {
      setIsLiked(true);
    }
  }, [isUserLike, currentTrack?.stared_user]);

  const handleLike = async (id) => {
    setIsLiked(true);
    await setLike({ id }).unwrap();
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    await setDislike({ id }).unwrap();
  };

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);

  return (
    <S.bar>
      <audio
        src={currentTrack.track_file}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />
      <S.barContent>
        <BarPlayerProgress
          duration={duration}
          timeProgress={timeProgress}
          audioRef={audioRef}
        />
        <S.barPlayerBlock>
          <S.barPlayer>
            <S.playerControls>
              <AudioPlayerIcons
                alt="prev"
                click={() => {
                  toggleCurrentTrack("prev");
                }}
              />
              <AudioPlayerIcons
                alt={isPlaying ? "pause" : "play"}
                click={togglePlay}
              />
              <AudioPlayerIcons
                alt="next"
                click={() => {
                  toggleCurrentTrack("next");
                }}
              />
              <AudioPlayerIcons
                alt="repeat"
                click={toggleTrackRepeat}
                isActive={repeatTrack}
              />
              <AudioPlayerIcons
                alt="shuffle"
                click={() => {
                  dispatch(toggleShuffleTracks(!shuffled));
                }}
                isActive={shuffled}
              />
            </S.playerControls>
            <S.playerTrackPlay>
              <S.trackPlayContain>
                <S.trackPlayImage>
                  <S.trackPlaySvg alt="music">
                    <use xlinkHref="../img/icon/sprite.svg#icon-note" />
                  </S.trackPlaySvg>
                </S.trackPlayImage>

                {!isLoading ? (
                  <S.trackPlayAuthor>
                    <S.trackPlayAuthorLink href="http://">
                      {currentTrack.name}
                    </S.trackPlayAuthorLink>
                  </S.trackPlayAuthor>
                ) : (
                  <SkeletonPlayBar />
                )}

                {!isLoading ? (
                  <S.trackPlayAlbum>
                    <S.trackPlayAlbumLink href="http://">
                      {currentTrack.author}
                    </S.trackPlayAlbumLink>
                  </S.trackPlayAlbum>
                ) : (
                  <SkeletonPlayBar />
                )}
              </S.trackPlayContain>
              <S.trackPlayLikeDis>
                <S.trackPlayLike>
                  {/* <S.trackPlayLikeSvg alt="like">
                    <use xlinkHref="../img/icon/sprite.svg#icon-like" />
                  </S.trackPlayLikeSvg> */}

                  <AudioPlayerIcons
                    alt="like"
                    click={() => {
                      toggleLikeDislike(currentTrack?.id);
                    }}
                    isActive={isLiked}
                  />
                </S.trackPlayLike>
                <S.trackPlayDislike>
                  {/* <S.trackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="../img/icon/sprite.svg#icon-dislike" />
                  </S.trackPlayDislikeSvg> */}
                </S.trackPlayDislike>
              </S.trackPlayLikeDis>
            </S.playerTrackPlay>
          </S.barPlayer>
          <AudioVolume audioRef={audioRef} />
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}

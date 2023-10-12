import * as S from "./AudioPlayer.styles";
import { SkeletonPlayBar } from "../TrackListItem/Tracks.style";
import { AudioPlayerIcons } from "../AdioPlayerIcons/AudioPlayerIcons";

export function AudioPlayer({ isLoading }) {
  return (
    <S.bar>
      <S.barContent>
        <S.barPlayerProgress />
        <S.barPlayerBlock>
          <S.barPlayer>
            <S.playerControls>
              <AudioPlayerIcons alt="prev" />
              <AudioPlayerIcons alt="play" />
              <AudioPlayerIcons alt="next" />
              <AudioPlayerIcons alt="repeat" />
              <AudioPlayerIcons alt="shuffle" />
            </S.playerControls>
            <S.playerTrackPlay>
              <S.trackPlayContain>
                <S.trackPlayImage>
                  <S.trackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.trackPlaySvg>
                </S.trackPlayImage>

                {isLoading ? (
                  <S.trackPlayAuthor>
                    <S.trackPlayAuthorLink href="http://">
                      Ты та...
                    </S.trackPlayAuthorLink>
                  </S.trackPlayAuthor>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}

                {isLoading ? (
                  <S.trackPlayAlbum>
                    <S.trackPlayAlbumLink href="http://">
                      Баста
                    </S.trackPlayAlbumLink>
                  </S.trackPlayAlbum>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}
              </S.trackPlayContain>
              <S.trackPlayLikeDis>
                <S.trackPlayLike>
                  <S.trackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.trackPlayLikeSvg>
                </S.trackPlayLike>
                <S.trackPlayDislike>
                  <S.trackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.trackPlayDislikeSvg>
                </S.trackPlayDislike>
              </S.trackPlayLikeDis>
            </S.playerTrackPlay>
          </S.barPlayer>
          <S.barVolumeBlock>
            <S.volumeContent>
              <S.volumeImage>
                <S.volumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.volumeSvg>
              </S.volumeImage>
              <S.volumeProgress>
                <S.volumeProgressLine $style="input"
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </S.volumeProgress>
            </S.volumeContent>
          </S.barVolumeBlock>
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}

/* eslint-disable no-param-reassign */
import { useState, useEffect } from "react";
import * as S from "./AudioVolume.style";

export function AudioVolume({ audioRef }) {
  const [volume, setVolume] = useState(50);
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <S.barVolumeBlock>
      <S.volumeContent>
        <S.volumeImage>
          <S.volumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </S.volumeSvg>
        </S.volumeImage>
        <S.volumeProgress>
          <S.volumeProgressLine
            $style="input"
            // className="volume__progress-line _btn"
            // name="range"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </S.volumeProgress>
      </S.volumeContent>
    </S.barVolumeBlock>
  );
}

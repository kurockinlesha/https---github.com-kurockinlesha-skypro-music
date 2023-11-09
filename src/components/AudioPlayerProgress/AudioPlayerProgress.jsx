/* eslint-disable no-param-reassign */
import * as S from "./AudioPlayerProgress.style";
import getDurationAudio from "../../utils/durationAudio";

export function BarPlayerProgress({ duration, timeProgress, audioRef }) {
  return (
    <>
      <S.barPlayerProgressTime>
        {getDurationAudio(timeProgress)} /{getDurationAudio(duration)}
      </S.barPlayerProgressTime>
      <S.barPlayerProgress
        type="range"
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value;
        }}
        min={0}
        max={duration}
        value={timeProgress}
        step={0.1}
      />
    </>
  );
}

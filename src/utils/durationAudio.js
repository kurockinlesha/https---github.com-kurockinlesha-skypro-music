export default function getDurationAudio(duration) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);

  const minutes = min < 10 ? `0${min.toString()}` : min.toString();
  const seconds = sec < 10 ? `0${sec.toString()}` : sec.toString();
   

  return `${minutes}:${seconds}`;
}

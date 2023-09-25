import { BrowserRouter, Link } from "react-router-dom";
import arrTracks from "../../utils/dataTracks";
import "./Tracks.css";

export function Tracks() {
  const trackItems = arrTracks.map((track) => (
    <li key={track.id} className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <BrowserRouter>
              <Link className="track__title-link" href="http://">
                {track.trackName}
                {track.remix ? (
                  <span className="track__title-span">({track.remix})</span>
                ) : (
                  ""
                )}
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <div className="track__author">
          <BrowserRouter>
            <Link className="track__author-link" href="http://">
              {track.trackAuthor}
            </Link>
          </BrowserRouter>
        </div>
        <div className="track__album">
          <BrowserRouter>
            <Link className="track__album-link" href="http://">
              {track.album}
            </Link>
          </BrowserRouter>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text"> {track.trackTime}</span>
        </div>
      </div>
    </li>
  ));

  return <ul className="content__playlist playlist">{trackItems}</ul>;
}

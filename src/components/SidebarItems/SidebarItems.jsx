import { BrowserRouter, Link } from "react-router-dom";
import "./SidebarItems.css";

export function SidebarItems(props) {
  return (
    <div className="sidebar__item">
      <BrowserRouter>
        <Link className="sidebar__link" href={props.item.link}>
          <img
            className="sidebar__img"
            src={props.item.img}
            alt="day's playlist"
          />
        </Link>
      </BrowserRouter>
    </div>
  );
}

import "./NavMenuItems.css";
import { BrowserRouter, Link } from "react-router-dom";

export function NavMenuItems(props) {
  return (
    <li className="menu__item">
      <BrowserRouter>
        <Link href={props.item.link} className="menu__link">
          {props.item.text}
        </Link>
      </BrowserRouter>
    </li>
  );
}

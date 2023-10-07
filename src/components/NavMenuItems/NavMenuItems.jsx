import * as S from "./NavMenuItems.styles";

export function NavMenuItems(props) {
  return (
    <S.menuItem>
        <S.menuLink to={props.item.link} className="menu__link">
          {props.item.text}
        </S.menuLink>
    </S.menuItem>
  );
}

import * as S from "./AudioPlayerIcons.styles";

export function AudioPlayerIcons(props) {
  return (
    <S.playerBtn
      $style={props.alt}
      onClick={(e) => {
        props.click();
        e.stopPropagation();
      }}
    >
      <S.playerBtnSvg
        $style={props.alt}
        alt={props.alt}
        $active={props.isActive}
      >
        <use
          xlinkHref={`../img/icon/sprite.svg#icon-${props.alt}`}
        />
      </S.playerBtnSvg>
    </S.playerBtn>
  );
}

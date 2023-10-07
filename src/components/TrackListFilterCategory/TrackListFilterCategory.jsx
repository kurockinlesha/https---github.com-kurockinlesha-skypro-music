import * as S from "./TrackListFilterCategory.style";

export function TrackListFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
}) {
  const switchСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  return (
    <S.filterCategoryName>
      <S.filterButton
        type="button"
        onClick={switchСategoryFilter}
        $activeStyle={isActiveCategory === nameCategory}
      >
        {nameCategory}
      </S.filterButton>
      {isActiveCategory === nameCategory && (
        <S.filterCategoryMenu>
          <S.filterList>{content}</S.filterList>
        </S.filterCategoryMenu>
      )}
    </S.filterCategoryName>
  );
}

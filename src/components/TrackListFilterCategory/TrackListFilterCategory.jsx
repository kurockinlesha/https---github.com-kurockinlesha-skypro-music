import { useEffect } from "react";
import * as S from "./TrackListFilterCategory.style";

export function TrackListFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
  numberSelectedValues,
}) {
  const switchСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  useEffect(() => {
    console.log("numberSelectedValues", numberSelectedValues);
  }, [numberSelectedValues]);

  return (
    <S.filterCategoryName>
      <S.filterButton
        type="button"
        onClick={switchСategoryFilter}
        $activeStyle={isActiveCategory === nameCategory}
      >
        {nameCategory}
      </S.filterButton>
      {numberSelectedValues > 0 && (
        <S.selectedFilterCount>{numberSelectedValues}</S.selectedFilterCount>
      )}
      {isActiveCategory === nameCategory && (
        <S.filterCategoryMenu>
          <S.filterList>{content}</S.filterList>
        </S.filterCategoryMenu>
      )}
    </S.filterCategoryName>
  );
}

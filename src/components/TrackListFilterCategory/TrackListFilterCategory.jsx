import "./TrackListFilterCategory.css";

export function TrackListFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
}) {
  const switchСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  return (
    <div className="filter__category-name">
      <button
        type="button"
        onClick={switchСategoryFilter}
        className={
          isActiveCategory === nameCategory
            ? "filter__button btn_active"
            : "filter__button _btn-text"
        }
      >
        {nameCategory}
      </button>
      {isActiveCategory === nameCategory && (
        <div className="filter__category-menu">
          <ul className="filter__list">{content}</ul>
        </div>
      )}
    </div>
  );
}

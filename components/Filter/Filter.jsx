import FilterItem from "./FilterItem";
import { useFiltersHook } from "../../hooks/filtersHook";

import { useSelector } from "react-redux";

const Filter = (props) => {
  const quickBuild = useSelector((state) => state.QuickBuildReducer.quickBuild);

  const { products, selected, handleChange } = props;

  const [isLoading, filters] = useFiltersHook(quickBuild.category);
  return (
    <div className="flex bg-active text-white">
      <div className="flex items-center justify-end w-full h-10">
        {filters &&
          Object.keys(filters).map((elm, index) => {
            return (
              <FilterItem
                key={index}
                name={elm}
                selected={selected ? selected[elm] : " "}
                option={filters[elm]}
                handleChange={handleChange}
              />
            );
          })}
        <FilterItem
          name="sort"
          selected={selected ? selected["sort"] : null}
          option={[{ name: "High to Low" }, { name: "Low to High" }]}
          handleChange={handleChange}
        />
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="w-40 mr-2 px-2 text-black"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default React.memo(Filter);

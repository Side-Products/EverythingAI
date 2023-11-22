import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Dropdown from "@/components/ui/Dropdowns/Dropdown";
import MultiDropdown from "../ui/Dropdowns/MultiDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/redux/actions/categoryActions";
import FilterCarousel from "./FilterCarousel";
import MobileFilterModal from "./MobileFilter";

export default function Filter({ filter, setFilter }) {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.allCategories);
  const { subcategories } = useSelector((state) => state.allSubCategories);
  const { pricings } = useSelector((state) => state.allPricings);

  useEffect(() => {
    if (categories && categories.length > 0 && filter.category) {
      if (filter.category?._id) dispatch(getCategory(filter.category._id));
    }
  }, [categories, dispatch, filter.category]);
  const { category } = useSelector((state) => state.category);

  const subcategoriesOptions = useMemo(() => {
    return category?.subcategories?.map((item) => {
      return {
        ...item,
        label: item.name,
        value: item._id,
      };
    });
  }, [category]);

  const defaultSubcategories = useMemo(() => {
    return subcategories?.map((item) => {
      return {
        ...item,
        label: item.name,
        value: item._id,
      };
    });
  }, [subcategories]);

  const sortingOptions = [
    { _id: 1, name: "Newest" },
    { _id: 2, name: "Oldest" },
    { _id: 3, name: "Most Popular" },
  ];

  const [subcategoriesFilterOptions, setSubcategoriesFilterOptions] = useState(
    []
  );
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const getIndustrySubcategories = async () => {
    const { data } = await axios.get(`/api/categories/find/industries`);
    const subcategories = data?.category?.subcategories;
    setSubcategoriesFilterOptions(subcategories);
  };
  useEffect(() => {
    getIndustrySubcategories();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="justify-between hidden w-full my-6 md:flex top-24">
        <div className="flex flex-wrap xl:flex-nowrap">
          <div className="flex items-center px-5 py-2 mb-3 mr-5 bg-white border border-gray-300 rounded-lg lg:mb-0 lg:mr-0 hover:border-primary-600">
            <span className="text-sm cursor-default">Category: </span>
            <Dropdown
              placeholder={"Select a Category"}
              selectedValue={filter.category.name}
              type={"CATEGORY"}
              setSelectedValue={setFilter}
              options={categories}
            />
          </div>

          <div className="flex items-center px-5 py-2 mb-3 bg-white border border-gray-300 rounded-lg lg:mb-0 lg:mx-5 hover:border-primary-600">
            <span className="text-sm cursor-default">Pricing: </span>
            <Dropdown
              placeholder={"Select Pricing"}
              selectedValue={filter.pricing.name}
              type={"PRICING"}
              setSelectedValue={setFilter}
              options={pricings}
            />
          </div>

          <div className="flex items-center px-5 py-0 pr-2 bg-white border border-gray-300 rounded-lg lg:mt-3 xl:mt-0 hover:border-primary-600">
            <span className="text-sm cursor-default">Subcategory: </span>
            <MultiDropdown
              placeholder={"Select a Subcategory"}
              selectedValue={filter.subcategories}
              type={"SUBCATEGORY"}
              setSelectedValue={setFilter}
              options={
                subcategoriesOptions?.length > 0
                  ? subcategoriesOptions
                  : defaultSubcategories
              }
            />
          </div>
        </div>

        <div className="flex self-start space-x-5">
          <div className="flex items-center px-5 py-2 bg-white border border-gray-300 rounded-lg hover:border-primary-600">
            <span className="text-sm cursor-default min-w-[53px]">
              Sort by:{" "}
            </span>
            <Dropdown
              placeholder={"Sort By"}
              selectedValue={filter.sortingFilter}
              type={"SORTINGFILTER"}
              setSelectedValue={setFilter}
              options={sortingOptions}
            />
          </div>
          <button
            className="px-6 text-sm rounded-lg bg-dark-800 text-light-200"
            onClick={() => {
              window.location.href = "/tools";
              setFilter({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          setShowMobileFilter(true);
        }}
        className="flex items-center mb-[35px] self-center justify-center px-8 py-2 rounded-lg cursor-pointer max-w-fit md:hidden lg:hidden bg-primary-300"
      >
        <p className="ml-3 font-semibold font-primary">Filters</p>
      </div>
      <MobileFilterModal {...{ showMobileFilter, setShowMobileFilter }}>
        <div className="flex flex-col w-full space-y-2">
          <p className="font-semibold text-[#000] font-secondary">Category</p>
          <Dropdown
            placeholder={"Select Here"}
            selectedValue={filter.category.name}
            type={"CATEGORY"}
            setSelectedValue={setFilter}
            options={categories}
            styledButton={true}
          />
        </div>

        <div className="flex flex-col w-full mt-5 space-y-2">
          <p className="font-semibold text-[#000] font-secondary">Pricing</p>
          <Dropdown
            placeholder={"Select Here"}
            selectedValue={filter.pricing.name}
            type={"PRICING"}
            setSelectedValue={setFilter}
            options={pricings}
            styledButton={true}
          />
        </div>
        <div className="flex flex-col w-full mt-5 space-y-2">
          <p className="font-semibold text-[#000] font-secondary">
            Subcategory
          </p>
          <MultiDropdown
            placeholder={"Select Here"}
            selectedValue={filter.subcategories}
            type={"SUBCATEGORY"}
            styledButton={true}
            setSelectedValue={setFilter}
            options={
              subcategoriesOptions?.length > 0
                ? subcategoriesOptions
                : defaultSubcategories
            }
          />
        </div>

        <div className="flex flex-col w-full mt-5 space-y-2">
          <p className="font-semibold text-[#000] font-secondary">Sort By</p>
          <Dropdown
            placeholder={"Select Here"}
            selectedValue={filter.sortingFilter}
            type={"SORTINGFILTER"}
            setSelectedValue={setFilter}
            options={sortingOptions}
            styledButton={true}
          />
        </div>

        <button
          className="px-6 py-2 mt-10 text-sm rounded-lg bg-dark-800 text-light-200"
          onClick={() => {
            window.location.href = "/tools";
            setFilter({ type: "reset" });
          }}
        >
          Reset
        </button>
      </MobileFilterModal>
      {subcategoriesFilterOptions?.length > 0 && (
        <FilterCarousel
          options={subcategoriesFilterOptions}
          setFilter={setFilter}
          type={"SUBCATEGORY"}
        />
      )}
    </div>
  );
}

import { useState, useEffect, useMemo, useContext } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "@/redux/actions/categoryActions";
import { getAllSubCategories } from "@/redux/actions/subCategoryActions";
import { getCategory } from "@/redux/actions/categoryActions";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { whatsImportantOptions, iAmInOptions } from "@/config/constants";
import { getObjectByName } from "@/utils/Helpers";
import Dropdown from "@/components/ui/Input/Dropdown";
import Textarea from "@/components/ui/Input/Textarea";
import Button from "@/components/ui/Button";
import {
  createAiRecommendation,
  clearErrors,
} from "@/redux/actions/aiRecommenderActions";
import { sleep } from "@/utils/Sleep";

const AiRecommender = () => {
  const { data: session } = useSession();
  const { setAuthModalOpen } = useContext(AuthModalContext);
  const { setLoading } = useContext(LoadingContext);
  const { setError } = useContext(StatusContext);

  const [whatAreYouHereFor, setWhatAreYouHereFor] = useState("Find AI tools");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [helpsMeWithText, setHelpsMeWithText] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.allCategories);
  const uniqueCategories = Array.from(
    new Set(categories?.map((category) => category.name))
  ).map((name) => {
    return categories?.find((category) => category.name === name);
  });

  const { subcategories } = useSelector((state) => state.allSubCategories);
  const uniqueSubCategories = Array.from(
    new Set(subcategories?.map((subcategory) => subcategory.name))
  ).map((name) => {
    return subcategories?.find((subcategory) => subcategory.name === name);
  });

  useEffect(() => {
    if (categories && categories.length > 0) {
      if (selectedCategory) {
        if (selectedCategory?._id) dispatch(getCategory(selectedCategory?._id));
      } else {
        const cat = getObjectByName("Marketing", categories);
        dispatch(getCategory(cat?._id));
      }
    }
  }, [categories, selectedCategory]);
  const { category } = useSelector((state) => state.category);

  const subcategoriesOptions = useMemo(() => {
    return category?.subcategories?.map((item) => item.name);
  }, [category]);

  const defaultSubcategories = useMemo(() => {
    return uniqueSubCategories?.map((item) => item.name);
  }, [uniqueSubCategories]);

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    if (selectedValues.length == 3 && checked) {
      setError({
        title: "Only 3 choices allowed",
        message: "Please unpick an option to choose something else",
        showErrorBox: true,
      });
      return;
    }
    setSelectedCheckboxes({
      ...selectedCheckboxes,
      [value]: checked,
    });
  };
  const selectedValues = Object.keys(selectedCheckboxes).filter(
    (value) => selectedCheckboxes[value]
  );

  const submitForm = () => {
    if (whatAreYouHereFor == "Explore how I can use AI") {
      router.push(`/blogs`);
      return;
    } else if (whatAreYouHereFor == "Want to list my AI tool here") {
      router.push(`/submit-tool`);
      return;
    } else {
      if (selectedValues.length == 0) {
        setError({
          title: "Insufficient data",
          message: "Please pick at max any 3 of the given options",
          showErrorBox: true,
        });
        return;
      }
      if (session && session.user) {
        setLoading({ title: "Analyzing data...", status: true });
        const cat = iAmInOptions.find(
          (category) =>
            category.name.toLowerCase() ===
            document.getElementById("category").value.toLowerCase()
        );
        const realCat = getObjectByName(cat.category, uniqueCategories);
        const data = {
          whatAreYouHereFor: document.getElementById("whatAreYouHereFor").value,
          workFor: document.getElementById("workFor").value,
          category: realCat.name,
          subCategory: document.getElementById("subCategory").value,
          helpsMeWith: helpsMeWithText,
          whatsImportant: selectedValues,
          companySize: document.getElementById("companySize").value,
        };
        dispatch(createAiRecommendation(data));
      } else {
        setAuthModalOpen(true);
      }
    }
  };

  const { success, recommendation, error } = useSelector(
    (state) => state.createAiRecommendation
  );
  const router = useRouter();
  useEffect(() => {
    if (success && recommendation) {
      sleep(2000).then(() => {
        router.push(`/ai-recommender/results/${recommendation._id}`);
        return;
      });
      return;
    }
    if (error) {
      setLoading({ status: false });
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, success]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
      className="w-full flex justify-center"
    >
      <div className="w-full lg:w-2/3 md:grid md:grid-cols-2 flex flex-col mt-10 py-16 md:px-32 sm:px-16 px-8 bg-white rounded-2xl md:gap-8 gap-2 md:items-end">
        <div>Hello! What are you here for?</div>
        <div>
          <Dropdown
            variant="secondary"
            id={"whatAreYouHereFor"}
            name="whatAreYouHereFor"
            options={[
              "Find AI tools",
              "Explore how I can use AI",
              "Want to list my AI tool here",
            ]}
            required={true}
            setChoice={(e) => setWhatAreYouHereFor(e.target.value)}
          />
        </div>

        {whatAreYouHereFor == "Find AI tools" && (
          <>
            <div className="md:mt-0 mt-6">I work for a</div>
            <div>
              <Dropdown
                variant="secondary"
                id={"workFor"}
                name="workFor"
                options={["Startup", "SMB", "Enterprise"]}
                required={true}
              />
            </div>

            <div className="md:mt-0 mt-6">I am in</div>
            <div>
              <Dropdown
                variant="secondary"
                id={"category"}
                name="category"
                required={true}
                // options={uniqueCategories}
                options={iAmInOptions}
                objKey={"name"}
                setChoice={(e) => {
                  const cat = iAmInOptions.find(
                    (category) =>
                      category.name.toLowerCase() ===
                      e.target.value.toLowerCase()
                  );
                  const realCat = getObjectByName(
                    cat.category,
                    uniqueCategories
                  );
                  setSelectedCategory(realCat);
                }}
              />
            </div>

            <div className="md:mt-0 mt-6">I am looking for an AI Tool in</div>
            <div>
              <Dropdown
                variant="secondary"
                id={"subCategory"}
                name="subCategory"
                required={true}
                options={
                  subcategoriesOptions?.length > 0
                    ? subcategoriesOptions
                    : defaultSubcategories
                }
              />
            </div>

            <div className="flex h-full items-start text-start md:mt-0 mt-6">
              That helps me with
            </div>
            <div>
              <Textarea
                variant="secondary"
                id={"helpsMeWith"}
                name={"helpsMeWith"}
                value={helpsMeWithText}
                onFieldChange={(e) => setHelpsMeWithText(e.target.value)}
                placeholder="write briefly what you want the tool to do"
                required={false}
                rows={"4"}
              />
            </div>

            <div className="md:mt-0 mt-6">
              What&apos;s important to me?
              <br />
              (Pick any 3)
            </div>
            <div className="grid grid-cols-2 text-sm whitespace-nowrap">
              {whatsImportantOptions &&
                whatsImportantOptions.map((option) => (
                  <label key={option} className="flex gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsImportant"
                      value={option}
                      checked={selectedCheckboxes[option] || false}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
            </div>

            <div className="md:mt-0 mt-6">My company size is</div>
            <div>
              <Dropdown
                variant="secondary"
                id={"companySize"}
                name="companySize"
                options={[
                  "1-10",
                  "11-50",
                  "51-200",
                  "201-500",
                  "501-1000",
                  "1000+",
                ]}
                required={true}
              />
            </div>
          </>
        )}

        <div className="col-span-2">
          <div>
            <Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
              <span className="transition-all duration-500 group-hover:pr-6">
                {whatAreYouHereFor == "Find AI tools"
                  ? "Give me the Top 3 Tools"
                  : "Submit"}
                <i className="absolute pl-2 mt-1 font-bold transition-all duration-500 opacity-0 fas fa-angle-double-right group-hover:opacity-100"></i>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AiRecommender;

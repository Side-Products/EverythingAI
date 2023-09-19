import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getCategory } from "@/redux/actions/categoryActions";
import { getAllPricings } from "@/redux/actions/pricingActions";
import {
  createTool,
  updateTool,
  clearErrors,
} from "@/redux/actions/toolActions";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { StatusContext } from "@/store/StatusContextProvider";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { useSession } from "next-auth/react";
import TextInput from "@/components/ui/Input/TextInput";
import Textarea from "@/components/ui/Input/Textarea";
import Dropdown from "@/components/ui/Input/Dropdown";
import Button from "@/components/ui/Button";
import ImageUploadInput from "@/components/ui/Input/ImageUploadInput";
import { getObjectByName, uploadImage } from "@/utils/Helpers";
import { sleep } from "@/utils/Sleep";
import UseCasesInput from "@/components/Submit/UseCasesInput";

const SubmitTool = ({ toolToEdit = null }) => {
  const { setLoading } = useContext(LoadingContext);
  const { setError, setSuccess } = useContext(StatusContext);
  const { data: session } = useSession();
  const { setAuthModalOpen } = useContext(AuthModalContext);

  const [toolData, setToolData] = useState({
    name: "",
    slug: "",
    url: "",
    utmLink: "",
    oneLiner: "",
    youtubeDemoVideoLink: "",
    features: "",
    useCases: [{ heading: "", content: "" }],
    category: "",
    subCategory: "",
    pricing: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    featured: "",
    trendingSponsored: "",
    ad: "",
  });
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  const [logo, setLogo] = useState("");
  const [logoName, setLogoName] = useState("");

  const [aspectRatio, setAspectRatio] = useState({ width: 16, height: 9 });

  const categoryDefaultOption = "Select a category";
  const subCategoryDefaultOption = "Select a sub-category";
  const pricingDefaultOption = "Select a pricing option";

  const onToolDataChange = (e) => {
    if (e.target.name === "category") {
      if (e.target.value === categoryDefaultOption) e.target.value = "";
      else {
        setToolData({
          ...toolData,
          [e.target.name]: getObjectByName(e.target.value, categories),
        });
      }
      if (toolToEdit) toolToEdit.subCategory.name = subCategoryDefaultOption;
      return;
    }
    if (e.target.name === "subCategory") {
      if (e.target.value === subCategoryDefaultOption) e.target.value = "";
      else {
        setToolData({
          ...toolData,
          [e.target.name]: getObjectByName(
            e.target.value,
            category.subcategories
          ),
        });
      }
      return;
    }
    if (e.target.name === "pricing") {
      if (e.target.value === pricingDefaultOption) e.target.value = "";
      else {
        setToolData({
          ...toolData,
          [e.target.name]: getObjectByName(e.target.value, pricings),
        });
      }
      return;
    }
    setToolData({ ...toolData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllPricings());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.allCategories);
  const { pricings } = useSelector((state) => state.allPricings);

  useEffect(() => {
    if (categories && categories.length > 0 && toolData.category !== "") {
      dispatch(getCategory(toolData.category?._id));
    }
  }, [categories, toolData.category]);
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    if (toolToEdit) {
      setToolData({
        name: toolToEdit.name,
        slug: toolToEdit.slug,
        url: toolToEdit.url,
        utmLink: toolToEdit.utmLink,
        oneLiner: toolToEdit.oneLiner,
        youtubeDemoVideoLink: toolToEdit.youtubeDemoVideoLink,
        features: toolToEdit.features,
        useCases: toolToEdit.useCases,
        category: toolToEdit.category,
        subCategory: toolToEdit.subCategory,
        pricing: toolToEdit.pricing,
        twitter: toolToEdit.twitter,
        instagram: toolToEdit.instagram,
        linkedin: toolToEdit.linkedin,
        youtube: toolToEdit.youtube,
        featured: toolToEdit.featured,
        trendingSponsored: toolToEdit.trendingSponsored,
        ad: toolToEdit.ad,
      });
      setImage(toolToEdit.image);
      setLogo(toolToEdit.logo);
    }
  }, []);

  const submitForm = async () => {
    if (session && session.user) {
      try {
        if (!toolData.category) {
          setError({
            title: "Category not selected",
            message: "Please select a category",
            showErrorBox: true,
          });
          return;
        }
        if (!toolData.pricing) {
          setError({
            title: "Pricing not selected",
            message: "Please select a pricing option",
            showErrorBox: true,
          });
          return;
        }
        if (!toolToEdit && (!logo || !logoName)) {
          setError({
            title: "Logo not uploaded",
            message: "Please upload a logo",
            showErrorBox: true,
          });
          return;
        }

        let tool = {
          ...toolData,
        };
        if (
          !tool.featured ||
          tool.featured == undefined ||
          tool.featured == "undefined"
        ) {
          delete tool.featured;
        }
        if (!tool.slug || tool.slug == undefined || tool.slug == "undefined") {
          delete tool.slug;
        }
        if (
          !tool.trendingSponsored ||
          tool.trendingSponsored == undefined ||
          tool.trendingSponsored == "undefined"
        ) {
          delete tool.trendingSponsored;
        }
        if (!tool.ad || tool.ad == undefined || tool.ad == "undefined") {
          delete tool.ad;
        }
        if (
          !tool.utmLink ||
          tool.utmLink == undefined ||
          tool.utmLink == "undefined"
        ) {
          delete tool.utmLink;
        }
        if (tool.featured && logo == "") {
          setError({
            title: "Logo not uploaded",
            message: "Please upload a logo to set the tool as featured",
            showErrorBox: true,
          });
          return;
        }

        if (logo && logoName) {
          const logoUrl = await uploadImage(
            logo,
            logoName,
            setLoading,
            setError
          );
          if (!logoUrl) {
            setLoading({ status: false, showProgressBar: false, progress: 0 });
            return;
          }

          tool = {
            ...tool,
            logo: logoUrl,
          };
        }

        if (toolToEdit) {
          if (image && imageName) {
            const imageUrl = await uploadImage(
              image,
              imageName,
              setLoading,
              setError
            );
            if (!imageUrl) {
              setLoading({
                status: false,
                showProgressBar: false,
                progress: 0,
              });
              return;
            }

            tool = {
              ...tool,
              image: imageUrl,
            };
          }

          dispatch(updateTool(toolToEdit._id, tool));
          return;
        } else {
          dispatch(createTool(tool));
        }
      } catch (error) {
        return;
      }
    } else {
      setAuthModalOpen(true);
    }
  };

  const { isUpdated, error: updateError } = useSelector(
    (state) => state.updateTool
  );
  useEffect(() => {
    if (isUpdated) {
      setLoading({ status: false });
      setSuccess((prevState) => ({
        ...prevState,
        title: "Tool Updated",
        message: "Tool has been updated successfully",
        showSuccessBox: true,
      }));
      sleep(2000).then(() => {
        router.reload();
      });
      return;
    }
    if (updateError) {
      setLoading({ status: false });
      setError({
        title: "Something went wrong",
        message: updateError,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, updateError, isUpdated]);

  const { success, tool, error } = useSelector((state) => state.createTool);
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (success && tool) {
      setLoading({ status: false });
      setSuccess((prevState) => ({
        ...prevState,
        title: "Tool submitted",
        message:
          "Your tool has been submitted successfully. Please wait for the admin to approve it.",
        showSuccessBox: true,
      }));
      sleep(2000).then(() => {
        router.reload();
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

  const [isBrowser, setBrowser] = useState(false);
  useEffect(() => {
    setBrowser(true);
  }, []);

  // // Uncomment this to use actual data
  // useEffect(() => {
  // 	setToolData({
  // 		name: "Goodreads",
  // 		url: "https://www.goodreads.com",
  // 		oneLiner: "Deciding what to read next? You’re in the right place.",
  // 		youtubeDemoVideoLink: "https://www.youtube.com/watch?v=2Oa7HqUqD9M",
  // 		features:
  // 			"See what books your friends are reading.\nTrack the books you're reading, have read, and want to read.\nCheck out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.\nFind out if a book is a good fit for you from our community’s reviews.",
  // 		useCases: [
  // 			{
  // 				heading: "Marketing",
  // 				content:
  // 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
  // 			},
  // 			{
  // 				heading: "Sales",
  // 				content:
  // 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
  // 			},
  // 			{
  // 				heading: "Content",
  // 				content:
  // 					"Maximize Marketing ROI with high-converting AI content, grow social media presence, improve search engine rankings, and create ad copies driving digital growth.",
  // 			},
  // 		],
  // 		category: "",
  // 		subCategory: "",
  // 		pricing: "",
  // 		twitter: "https://twitter.com/evernote",
  // 		instagram: "https://www.instagram.com/evernote/",
  // 		linkedin: "https://www.linkedin.com/company/evernote/",
  // 		youtube: "https://www.youtube.com/user/EvernoteVideos",
  // 	});
  // }, []);

  return (
    <form
      id="tool-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
      className="flex flex-col items-center justify-center w-full gap-y-10"
      encType="multipart/form-data"
    >
      <div className="grid items-start w-full grid-cols-1 mt-20 md:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-16">
        <div className="flex flex-col gap-y-8">
          {toolToEdit && query?.feature !== "true" && (
            <div className="flex flex-col">
              <div className="relative mb-16">
                <div className="absolute right-0 w-[160px] h-[90px] rounded-lg">
                  {image ? (
                    <Image
                      src={image}
                      alt="image"
                      objectFit="cover"
                      layout="fill"
                      className="rounded-lg"
                      priority
                    />
                  ) : (
                    <div
                      className={`bg-primary-300 opacity-40 w-full h-full flex items-center justify-center rounded-lg text-light-100 text-4xl`}
                    >
                      <i className="fa-solid fa-image"></i>
                    </div>
                  )}
                </div>
              </div>
              <ImageUploadInput
                image={image}
                setImage={setImage}
                setImageName={setImageName}
                label={"Product Image (Ratio 16 : 9)"}
                required={
                  toolToEdit && toolToEdit.image == image ? false : true
                }
                aspectRatio={aspectRatio}
              />
            </div>
          )}

          {toolToEdit && query?.feature == "true" && (
            <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
              <TextInput
                variant="secondary"
                label={"Position for Featured Tool in the Hero Section"}
                type={"number"}
                value={toolData.featured}
                name={"featured"}
                onFieldChange={onToolDataChange}
                placeholder="Enter featured position"
                required={false}
              />
            </div>
          )}
          {(!toolToEdit || query?.feature == "true") && (
            <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
              <div
                className="flex flex-col"
                onClick={() => setAspectRatio({ width: 1, height: 1 })}
              >
                <div className="relative mb-16">
                  <div className="absolute right-0 w-[90px] h-[90px] rounded-lg">
                    {logo ? (
                      <Image
                        src={logo}
                        alt="logo"
                        objectFit="cover"
                        layout="fill"
                        className="rounded-lg"
                        priority
                      />
                    ) : (
                      <div
                        className={`bg-primary-300 opacity-40 w-full h-full flex items-center justify-center rounded-lg text-light-100 text-4xl`}
                      >
                        <i className="fa-solid fa-image"></i>
                      </div>
                    )}
                  </div>
                </div>
                <ImageUploadInput
                  image={logo}
                  setImage={setLogo}
                  setImageName={setLogoName}
                  label={"Logo"}
                  required={false}
                  aspectRatio={aspectRatio}
                />
              </div>
            </div>
          )}

          {toolToEdit && (
            <>
              <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
                <TextInput
                  variant="secondary"
                  label={"Position for Sponsored Tool on Trending Table"}
                  type={"number"}
                  value={toolData.trendingSponsored}
                  name={"trendingSponsored"}
                  onFieldChange={onToolDataChange}
                  placeholder="Enter position"
                  required={false}
                />
              </div>

              <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
                <TextInput
                  variant="secondary"
                  label={"Position for the AD on tools page"}
                  type={"number"}
                  value={toolData.ad}
                  name={"ad"}
                  onFieldChange={onToolDataChange}
                  placeholder="Enter position for the ad"
                  required={false}
                />
              </div>
            </>
          )}

          <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
            <TextInput
              variant="secondary"
              label={"Product Name"}
              type={"text"}
              value={toolData.name}
              name={"name"}
              onFieldChange={onToolDataChange}
              placeholder="Eg. EverythingAI"
              required={true}
            />

            {toolToEdit && (
              <TextInput
                variant="secondary"
                label={"Tool URL Slug"}
                type={"text"}
                value={toolData.slug}
                name={"slug"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. everything-ai"
                required={true}
              />
            )}

            <TextInput
              variant="secondary"
              label={
                "Product URL (This will be the CTA link on your tool page)"
              }
              type={"text"}
              value={toolData.url}
              name={"url"}
              onFieldChange={onToolDataChange}
              placeholder="Eg. https://everythingai.club"
              required={true}
            />

            {toolToEdit && (
              <TextInput
                variant="secondary"
                label={"UTM Link"}
                type={"text"}
                value={toolData.utmLink}
                name={"utmLink"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. https://everythingai.club"
              />
            )}

            <TextInput
              variant="secondary"
              label={"Product one liner"}
              type={"text"}
              value={toolData.oneLiner}
              name={"oneLiner"}
              onFieldChange={onToolDataChange}
              placeholder="Discover AI tools that fit like a glove: handpicked for your industry and goals."
              required={true}
            />
          </div>

          <div className="flex flex-col p-10 gap-y-8 bg-light-100 rounded-2xl">
            <TextInput
              variant="secondary"
              label={"YouTube Demo Video Link"}
              type={"url"}
              value={toolData.youtubeDemoVideoLink}
              name={"youtubeDemoVideoLink"}
              onFieldChange={onToolDataChange}
              placeholder="A YouTube video link to your product demo"
              required={false}
            />

            <Textarea
              variant="secondary"
              label={"Features"}
              value={toolData.features}
              name={"features"}
              onFieldChange={onToolDataChange}
              placeholder="Your product features"
              required={false}
            />
          </div>

          <div className="flex flex-col p-10 mb-8 md:mb-0 gap-y-8 bg-light-100 rounded-2xl">
            <Dropdown
              variant="secondary"
              id={"selectCategory"}
              label={"Select Category"}
              name="category"
              options={categories}
              objKey={"name"}
              defaultOption={
                toolToEdit?.category?.name || categoryDefaultOption
              }
              setChoice={onToolDataChange}
              classes={"w-full"}
              required={true}
            />

            <Dropdown
              variant="secondary"
              id={"selectSubCategory"}
              label={"Select Sub-Category"}
              name="subCategory"
              options={category?.subcategories}
              objKey={"name"}
              defaultOption={
                toolToEdit?.subCategory?.name || subCategoryDefaultOption
              }
              setChoice={onToolDataChange}
              classes={"w-full"}
              required={false}
            />

            <Dropdown
              variant="secondary"
              id={"selectPricing"}
              label={"Select Pricing"}
              name="pricing"
              options={pricings}
              objKey={"name"}
              defaultOption={
                toolToEdit
                  ? toolToEdit?.pricing?.name + " " + toolToEdit?.pricing?.meta
                  : pricingDefaultOption
              }
              setChoice={onToolDataChange}
              classes={"w-full"}
              required={true}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col p-10 bg-light-100 rounded-2xl">
            <div className="mb-6 font-semibold">Social Links</div>

            <div className="flex flex-col gap-y-8">
              <TextInput
                variant="secondary"
                label={"Twitter"}
                type={"text"}
                value={toolData.twitter}
                name={"twitter"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. https://twitter.com/{username}"
                required={false}
              />
              <TextInput
                variant="secondary"
                label={"Instagram"}
                type={"text"}
                value={toolData.instagram}
                name={"instagram"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. https://instagram.com/{username}"
                required={false}
              />
              <TextInput
                variant="secondary"
                label={"LinkedIn"}
                type={"text"}
                value={toolData.linkedin}
                name={"linkedin"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. https://linkedin.com/company/{username}"
                required={false}
              />
              <TextInput
                variant="secondary"
                label={"YouTube"}
                type={"text"}
                value={toolData.youtube}
                name={"youtube"}
                onFieldChange={onToolDataChange}
                placeholder="Eg. https://youtube.com/{username}"
                required={false}
              />
            </div>
          </div>

          <UseCasesInput toolData={toolData} setToolData={setToolData} />
        </div>
      </div>

      <div className="md:w-1/3">
        <Button variant={"primary"} classes="text-md px-4 py-3 group mt-4">
          <span className="transition-all duration-500 group-hover:pr-6">
            Submit
            <i className="absolute pl-2 mt-1 font-bold transition-all duration-500 opacity-0 fas fa-angle-double-right group-hover:opacity-100"></i>
          </span>
        </Button>
        {/* <Button
					variant={"primary"}
					classes="text-md px-4 py-3 group mt-4"
					disabled={isBrowser && !document?.getElementById("tool-form")?.checkValidity()}
				>
					{isBrowser && !document?.getElementById("tool-form")?.checkValidity() ? (
						<span>Submit</span>
					) : (
						<span className="transition-all duration-500 group-hover:pr-6">
							Submit
							<i className="absolute pl-2 mt-1 font-bold transition-all duration-500 opacity-0 fas fa-angle-double-right group-hover:opacity-100"></i>
						</span>
					)}
				</Button> */}
      </div>
    </form>
  );
};

export default SubmitTool;

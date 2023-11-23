import { useState, useEffect, useContext, useRef } from "react";
import CropImageModal from "./CropImageModal";
import { LoadingContext } from "@/store/LoadingContextProvider";

export default function ImageUpload({
  image,
  setImage,
  setImageName,
  required,
  aspectRatio,
}) {
  const { loading, setLoading } = useContext(LoadingContext);
  const [showModal, setShowModal] = useState(false);
  const [imageToCrop, setImageToCrop] = useState("");
  const [croppedImage, setCroppedImage] = useState(undefined);

  const imageRef = useRef(null);
  const selectedImage = useRef(null);

  const circularCrop = false;
  const cropModalValues = {
    showModal,
    setShowModal,
    imageToCrop,
    setCroppedImage,
    circularCrop,
    aspectRatio,
  };

  useEffect(() => {
    async function setCroppedImageToSave() {
      if (croppedImage !== undefined) {
        setImage(croppedImage);
        setLoading({
          ...loading,
          status: true,
          title: "Uploading Image",
          message: "Please wait while we upload the image...",
          showProgressBar: false,
          progress: 0,
        });

        try {
          // await uploadBase64ToIPFS(Moralis, croppedImage, 'cover-art', setLoading).then((url) =>
          //     setImage(url)
          // );
        } catch (err) {
          if (err.message && err.message == "request entity too large") {
            alert("File too large");
          } else {
            alert("Oops! Something went wrong.");
          }
        }
        setLoading({
          ...loading,
          status: false,
          title: "",
          message: "",
          showProgressBar: false,
          progress: 0,
        });
      }
    }
    setCroppedImageToSave();
  }, [croppedImage, loading, setImage, setLoading]);

  const handleImageUpload = async (event) => {
    // If file size is > 10 MB show error box
    if (event.target.files[0] && event.target.files[0].size > 10000000) {
      alert("File too large: Uploaded image should be less than 10 MB");
      return;
    }
    if (event.target.files[0]) {
      const imageURL = URL.createObjectURL(event.target.files[0]);
      setImageToCrop(imageURL);
      setShowModal(true);
      selectedImage.current = event.target.files[0];
      if (setImageName) setImageName(event.target.files[0].name);
    }
  };

  return (
    <>
      <input
        ref={imageRef}
        onChange={(e) => handleImageUpload(e)}
        accept="image/*"
        type="file"
        className="hidden"
        id="imageToUpload"
        name="image"
        required={required}
      />

      <label
        htmlFor="imageToUpload"
        className="w-full h-full flex bg-light-100 text-dark-300 outline-none focus:ring-primary-500 focus:border-primary-500 border-2 border-primary-300 rounded-md form-input transition duration-300 cursor-pointer"
      >
        <div className="w-1/3 flex items-center justify-center bg-primary-400 text-light-100 h-[36px]">
          {image ? (
            <i className="fa-solid fa-circle-check text-primary-600 text-xl"></i>
          ) : (
            "Choose File"
          )}
        </div>
        <div className="h-[36px] flex items-center justify-center px-5 text-sm text-dark-200">
          {image && selectedImage
            ? // @ts-ignore
              selectedImage?.current?.name.substr(0, 20) +
              // @ts-ignore
              (selectedImage?.current?.name.length > 20 ? "..." : "")
            : "No file chosen"}
        </div>
      </label>

      <CropImageModal {...cropModalValues} />
    </>
  );
}

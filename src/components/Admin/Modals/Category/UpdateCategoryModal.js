import Modal from "@/components/ui/Modal";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateCategory, clearErrors } from "@/redux/actions/categoryActions";
import { UPDATE_CATEGORY_RESET } from "@/redux/constants/categoryConstants";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import { sleep } from "@/utils/Sleep";
import TextInput from "@/components/ui/Input/TextInput";
import Image from "next/image";
import ImageUploadInput from "@/components/ui/Input/ImageUploadInput";
import { uploadImage } from "@/utils/Helpers";

const UpdateCategoryModal = ({ isOpen, setOpen, categoryToUpdate }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  const { setSuccess, setError } = useContext(StatusContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const { setLoading } = useContext(LoadingContext);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateCategory
  );

  useEffect(() => {
    if (categoryToUpdate) {
      setName(categoryToUpdate.name);
      setImage(categoryToUpdate.image);
    }
  }, [categoryToUpdate]);

  useEffect(() => {
    if (isUpdated) {
      setSuccess({
        title: "Category updated successfully",
        message: "Category details were updated",
        showSuccessBox: true,
      });

      dispatch({ type: UPDATE_CATEGORY_RESET });
      sleep(1000).then(() => {
        router.reload();
      });
    }

    if (error) {
      setLoading({ status: false, showProgressBar: false, progress: 0 });
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, isUpdated]);

  const submitHandler = async () => {
    if (image && imageName) {
      const imageUrl = await uploadImage(
        image,
        imageName,
        setLoading,
        setError
      );
      if (!imageUrl) {
        setLoading({ status: false, showProgressBar: false, progress: 0 });
        return;
      }

      const categoryData = {
        name,
        image: imageUrl,
      };
      dispatch(updateCategory(categoryToUpdate._id, categoryData));
      setOpen(false);
    } else {
      const categoryData = {
        name,
      };
      dispatch(updateCategory(categoryToUpdate._id, categoryData));
      setOpen(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <Modal
      isOpen={isOpen}
      image={
        <div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      }
      title={"Update Category Details"}
      content={
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              submitHandler();
            }}
            className="flex flex-col gap-y-3"
          >
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
                label={"Collection Image (Ratio 16 : 9)"}
                required={false}
              />
            </div>

            <TextInput
              label={"Name"}
              id={"name_field"}
              value={name}
              name={"name"}
              onFieldChange={(e) => setName(e.target.value)}
              required={true}
            />

            <div className="mt-10">
              <Button
                variant={"primary"}
                rounded={true}
                classes="text-md px-8 py-3"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      }
      onClose={() => {
        setOpen(false);
      }}
    ></Modal>
  );
};

export default UpdateCategoryModal;

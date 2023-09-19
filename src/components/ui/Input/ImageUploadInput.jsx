import ImageUpload from "@/components/ui/ImageUpload";

export default function ImageUploadInput({
  image,
  setImage,
  setImageName,
  label,
  required = true,
  aspectRatio = { width: 16, height: 9 },
}) {
  return (
    <div className="w-full flex flex-col justify-end mt-4">
      <p className="text-dark-700 font-medium mb-2 text-start">{label}</p>

      <ImageUpload
        image={image}
        setImage={setImage}
        setImageName={setImageName}
        required={required}
        aspectRatio={aspectRatio}
      />
    </div>
  );
}

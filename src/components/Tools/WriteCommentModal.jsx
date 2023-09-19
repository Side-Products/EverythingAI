import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Textarea from "../ui/Input/Textarea";

export default function CommentModal({
  isOpen,
  title,
  handlePostClick,
  handleModalClose,
  starRatingJSX,
  currRate,
  review,
  setReview,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      content={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePostClick(currRate, review);
          }}
          className="w-full"
        >
          <div className="w-full flex">
            <div className="flex flex-row-reverse star-container">
              {starRatingJSX}
            </div>
          </div>
          <div className="flex justify-center w-full mt-6">
            <Textarea
              value={review}
              required={true}
              placeholder="Tell us about your experience with this tool"
              onFieldChange={(e) => setReview(e.target.value)}
              rows={10}
            />
          </div>
          <div className="flex justify-end mt-12">
            <Button type="submit" hasWFull={false}>
              Post
              <span className="ml-6 text-lg">
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </Button>
          </div>
        </form>
      }
      onClose={handleModalClose}
    ></Modal>
  );
}

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Textarea from "../ui/Input/Textarea";
import { useState } from "react";

export default function CommentModal ({isOpen, title, handlePostClick, handleModalClose}) {
    const [review, setReview] = useState('')

    return (
        <Modal
			isOpen={isOpen}
			title={title}
			content={
				<div className="w-full">
                        <div className="flex justify-center w-full">
                            <Textarea 
                                value={review} 
                                required={false} 
                                placeholder="Type your opinion..." 
                                onFieldChange={(e) => setReview(e.target.value)}
                                rows={10}
                            />
                        </div>
						<div className="flex justify-end mt-12">
							<Button hasWFull={false} onClick={handlePostClick}>
                                Post 
                                <span className="ml-6 text-lg">
									<i className="fa-solid fa-arrow-right-long"></i>
								</span>
                            </Button>
						</div>
				</div>
			}
			onClose={handleModalClose}
		></Modal>
    );
}